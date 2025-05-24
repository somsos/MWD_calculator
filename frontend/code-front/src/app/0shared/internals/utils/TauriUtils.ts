export abstract class TauriUtils {

  public static isTauriEnv(): boolean {
    return (window as any).isTauri;
  }

  public static async selectAndReadFile(): Promise<File | null> {
    const dialogModule = await import('@tauri-apps/plugin-dialog');
      const fileURI = await dialogModule.open({ multiple: false, directory: false, });
      if(!fileURI) {
        return null;
      }
      const csvFile: File = await TauriUtils._URIToFile(fileURI);
      return csvFile;
  }

  private static async _URIToFile(filePath: string): Promise<File> {
    console.debug("File selected", filePath);
    if (filePath.startsWith('content://')) { // Handle data URI (base64)
      const fs = await import('@tauri-apps/plugin-fs');
      const text = await fs.readTextFile(filePath, {
        baseDir: fs.BaseDirectory.AppConfig,
      });
      var blob = new Blob([text], { type: 'text/plain' });
      var file = new File([blob], "input.csv", {type: "text/csv"});
      return file;
    } else {
      const msg = 'File path not supported, expected "content://"';
      throw new Error(msg);
    }
  }

}