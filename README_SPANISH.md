# Calculadora MWD (DMP)

- [Calculadora MWD (DMP)](#calculadora-mwd-dmp)
  - [Introducción](#introducción)
    - [Estrategias y prácticas aplicadas](#estrategias-y-prácticas-aplicadas)
    - [Herramientas utilizadas en este proyecto](#herramientas-utilizadas-en-este-proyecto)
  - [Cómo usar los ejecutables](#cómo-usar-los-ejecutables)
    - [Si la aplicación no se ejecuta (Falta Web View)](#si-la-aplicación-no-se-ejecuta-falta-web-view)
      - [Para usuarios de Windows](#para-usuarios-de-windows)
      - [Para usuarios de Linux](#para-usuarios-de-linux)
  - [Notas para desarrolladores](#notas-para-desarrolladores)
    - [Cómo compilar](#cómo-compilar)
      - [Instalar herramientas de compilación](#instalar-herramientas-de-compilación)
- [Description: Ubuntu 22.04.5 LTS](#description-ubuntu-22045-lts)
- [Codename: jammy](#codename-jammy)
- [v22.15.1](#v22151)
- [script: 5.18.1](#script-5181)
- [native: 0.2.2](#native-022)
- ["21.0.7" 2025-04-15 LTS](#2107-2025-04-15-lts)
- [/usr/lib/jvm/java-17-openjdk-amd64](#usrlibjvmjava-17-openjdk-amd64)
- [/home/m51/Android/Sdk/ndk/29.0.13113456](#homem51androidsdkndk29013113456)
- [2.4.21](#2421)
- [1.86.0 (05f9846f8 2025-03-31)](#1860-05f9846f8-2025-03-31)
- [tauri-cli 2.5.0](#tauri-cli-250)

## Introducción

Calculadora para calcular el diámetro medio ponderado (DMP) del suelo, basada
en las fórmulas mencionadas en los artículos de Van Bavel [1] y Yoder, R.E. [2].
Esta calculadora fue hecha con el Framework Angular, y para hacerla portable y
funcional offline, usé las herramientas Tauri y Electron para empaquetar
el código en diferentes ejecutables que pueden ser ejecutados en Android,
Windows y Linux, manteniendo el proceso de compilación original de Angular para
que pueda ser usado como de costumbre en cualquier servidor web estático.

### Estrategias y prácticas aplicadas

Para crear un código mantenible apliqué las estrategias y prácticas
mencionadas en estos dos libros:

- *Get Your Hands Dirty on Clean Architecture por Tom Hombergs*
- *Clean Code por Robert C. Martin*

Lo cual incluye las siguientes arquitecturas, prácticas y tácticas:

- Arquitectura Hexagonal: para la estructura interna de los módulos.

- Arquitectura basada en componentes: para la intercomunicación de módulos.

- Desarrollo guiado por pruebas (TDD): Usando Jasmine para pruebas unitarias y Cypress
  para pruebas de extremo a extremo (end-to-end).

- Programación orientada a objetos y principios SOLID: Para la codificación general
  y la intercomunicación de elementos.

- Programación funcional: para facilitar pequeños flujos relacionados con la
  gestión de eventos.

### Herramientas utilizadas en este proyecto

- Typescript
- Angular
- Electron
- Tauri
- Material UI
- Cypress
- RxJs
- Jasmine

## Cómo usar los ejecutables

El archivo `calc_mwd_dist.zip` contiene todos los ejecutables del proyecto:

- **`Calculadora-MWD-old-linux-x64/`**: Esta carpeta contiene el
    ejecutable generado por Electron para sistemas Linux de 64 bits.

- **`Calculadora-MWD-old-windows-x64/`**: Similar al anterior,
    pero para Windows.

- **`Calculadora-MWD-server`**: Contiene código para cualquier servidor web
    estático. Incluye `server-linux.executable` y
    `server-windows.exe` para configurar un servidor local simple.

- **`Calculadora-MWD-Android-installer.apk`**: El instalador para
    Android. Necesitarás **habilitar la instalación desde fuentes desconocidas**
    para usarlo.

- **`Calculadora-MWD-windows-x64-installer-setup.exe`**: Un instalador
    estándar de Windows. Instalará el software y las dependencias,
    creará accesos directos en el escritorio, desinstalador, etc.

- **`Calculadora-MWD-windows-x64-portable.exe`**: Esta es solo la
    aplicación de la calculadora. Depende de un componente de vista web de tu
    sistema operativo. Si no se ejecuta, sigue las
    instrucciones de *Si la aplicación no se ejecuta (Falta Web View)*.

- **`Calculadora-MWD-linux-x64-installer.AppImage`**: Un instalador
    estándar de Linux. Instalará el software y las dependencias,
    creará accesos directos en el escritorio, desinstalador, etc.

- **`Calculadora-MWD-linux-x64-portable.executable`**: Esta es solo la
    aplicación de la calculadora. Depende de un componente de vista web de tu
    sistema operativo. Si no se ejecuta, sigue las
    instrucciones de *Si la aplicación no se ejecuta (Falta Web View)*.

---

### Si la aplicación no se ejecuta (Falta Web View)

Tu aplicación requiere un componente de vista web para mostrar su interfaz. Esto
normalmente está preinstalado en los sistemas modernos. Si la aplicación no se inicia,
sigue las instrucciones para tu sistema operativo a continuación.

#### Para usuarios de Windows

La aplicación necesita **Microsoft Edge WebView2 Runtime**. A menudo está
preinstalado en Windows 11 y versiones recientes de Windows 10.

1. Ve a la página oficial de descarga de Microsoft WebView2:
   [https://developer.microsoft.com/en-us/microsoft-edge/webview2/](https://developer.microsoft.com/en-us/microsoft-edge/webview2/)
2. En "Evergreen Bootstrapper", haz clic en **Descargar** y ejecuta el
   instalador. Sigue las instrucciones en pantalla.
3. Una vez instalado, intenta ejecutar la aplicación de nuevo.

---

#### Para usuarios de Linux

La aplicación requiere un motor de renderizado web, típicamente **WebKitGTK** o
**libwebkit2gtk**. La mayoría de las distribuciones Linux modernas lo incluyen. Si
encuentras un error, puede que necesites instalarlo.

Dado que hay muchas distribuciones de Linux, los comandos exactos varían.
Aquí hay comandos de ejemplo para instalarlo:

- **Ubuntu:** `sudo apt update && sudo apt install libwebkit2gtk-4.0-dev build-essential curl wget file libssl-dev libgtk-3-dev libayatana-appindicator3-dev librsvg2-dev`

---

## Notas para desarrolladores

### Cómo compilar

#### Instalar herramientas de compilación

1. Instala Node siguiendo [estas](https://nodejs.org/en/download) instrucciones.

2. Instala SDKMAN siguiendo [estas](https://sdkman.io/install/) instrucciones.

3. Usando SDKMAN instala Java y Groovy; para más detalles, usa
   [esta](https://sdkman.io/usage/#latest-stable) referencia.

4. Instala Android Studio y sus dependencias usando
   [estas](https://developer.android.com/studio/install#linux) instrucciones.

5. Instala Tauri siguiendo [estas](https://v2.tauri.app/start/prerequisites/)
   instrucciones.

Estas instrucciones se siguieron en una máquina Linux y la configuración terminó con
estas versiones.

```shell
$ lsb_release -a
# Description: Ubuntu 22.04.5 LTS
# Codename: jammy

$ node -v
# v22.15.1

$ sdk version
# script: 5.18.1
# native: 0.2.2

$ java -version
# "21.0.7" 2025-04-15 LTS

$ echo $JAVA_HOME
# /usr/lib/jvm/java-17-openjdk-amd64

$ echo $NDK_HOME
# /home/m51/Android/Sdk/ndk/29.0.13113456

$ groovy -version
# 2.4.21

$ rustc --version
# 1.86.0 (05f9846f8 2025-03-31)

$ tauri --version
# tauri-cli 2.5.0