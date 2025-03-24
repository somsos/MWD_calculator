# Project Name

- [Project Name](#project-name)
  - [Project Folder Structure](#project-folder-structure)
    - [Project Sub-Folder Structure](#project-sub-folder-structure)
      - [Documentation folder](#documentation-folder)
      - [Workspace folder](#workspace-folder)
      - [Results folder](#results-folder)
    - [Analysis Folder](#analysis-folder)
      - [Results of Analysis](#results-of-analysis)
        - [Intel](#intel)
        - [Prototypes](#prototypes)
        - [Targets](#targets)
    - [Administration Folder](#administration-folder)

## Project Folder Structure

Each of the folders represent an independent department, and the numerical order intent to
be a sequential order when a new requirement is needed, which each one will communicate
with the next one using simple artifacts.

Notice that this folders is administrated by the control version system of Git, meaning
there are not any historical files, instead all the files must be in context of the current
objective of the project.

Notice that each folder have and README.md file, this file have the purpose of guide the user
that have this project folder like;

- Where can find more information.
- How to use the folders and files in the folder.
- Example: this file.

### Project Sub-Folder Structure

Each folder have the same folders that are 1_documentation, 2_workspace and 3_results, where
by name must auto-explicatory but below we break down each one.

#### Documentation folder

This contain a summary of what they are doing in 2_workspace, usings texts, tables, diagrams,
images, etc, so other department could have an idea of what and how they are working

For example, in analysis they explain how they make each analysis, a description of its
tools, terms, and personal they use.

For example, in backend it have designs of its APIs, OOPs, and explications of tools,
organization etc.

#### Workspace folder

This is where they work, containing the necessary files that will generate the result files.

For example, in analysis it have the raw info in .json, .doc, etc that they will use
to generate the PDF that they have the results folder.

For example, in 3_database it have the .sql files that they require to make the import.sql
file that 4_backend requires from them.

#### Results folder

It contains the files that are of interest for the other departments, mainly for the next
in order department.

For example, in analysis it contain PDFs that represent the prototypes, motivations and
required information, so 2_administration can make a plan so the database, backend and frontend
know what to do.

<!--

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

-->

### Analysis Folder

This represent the analysis and UI/UX department, and as result have PDF containing the
required information of the project as:

- Motivations
  - Why make this project?
  - What problems does it solve?
- Targets
  - Audience target
  - Long term targets
  - Short term targets
- Important information about the context of the project
  - Terms and definitions
- General explications about the implementation (avoiding details)

#### Results of Analysis

There are 3 folders in Analysis's results folder each one representing a part of interest
for administration or other department.

IMPORTANT: Each artifact of interest must be in a PDF format, so the others departments do
not have to know about the internal tools that use Analysis. In the case this info does not
require a lot of space an .png or an plain text file could be acceptable.

##### Intel

Here we have different important topics about the project or its context.

##### Prototypes

Diagrams of how it will look the implementation

##### Targets

In overall what are the general and actual targets of the project.

<!--

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

-->

### Administration Folder

Contains the files that administrate the project team like the targets and timings, in this
case we use an **SCRUM** strategy, so this targets and timing are going to be expressed under
this framework, using the closest standard practices like.

- User Histories: These are the targets explained since the final user perspective.

- Back Log: These are the broken down targets extracted from User Histories by the project team

- Sprint: These are the timings, expressed as an set of User Histories that will be implemented
  in a determined time.

- BurnDown chart: Represent the current progress of the spring.

- Retrospective: These are the adjustments that are required as long the project deliver an
  sprint

ProjectLog.pdf: Contain the User Histories and its Back Log Items

Sprint.pdf: the timings, Sprint (basic info), BurnDown and Retrospectives.
