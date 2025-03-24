# Project Name

- [Project Name](#project-name)
  - [Project Folder Structure](#project-folder-structure)
    - [Project Sub-Folder Structure](#project-sub-folder-structure)
      - [Documentation folder](#documentation-folder)
        - [x/documentation/howTo](#xdocumentationhowto)
        - [x/documentation/howTo/internals](#xdocumentationhowtointernals)
        - [x/documentation/howTo/externals](#xdocumentationhowtoexternals)
      - [Workspace folder](#workspace-folder)
      - [Results folder](#results-folder)
    - [Analysis Folder](#analysis-folder)
      - [Results of Analysis](#results-of-analysis)
        - [Intel](#intel)
        - [Prototypes](#prototypes)
        - [Targets](#targets)
    - [Administration Folder](#administration-folder)
      - [Administration results](#administration-results)
        - [ProjectLog.pdf](#projectlogpdf)
        - [Sprint.pdf](#sprintpdf)
    - [DataBase Folder](#database-folder)
      - [DataBase Results](#database-results)
        - [dataBase/results/ConnectionInformation.json](#databaseresultsconnectioninformationjson)
        - [dataBase/results/diagrams](#databaseresultsdiagrams)
        - [dataBase/results/bin/database.sh](#databaseresultsbindatabasesh)
    - [Backend Folder](#backend-folder)
      - [Backend Results](#backend-results)
      - [backend/results/bin/back.sh](#backendresultsbinbacksh)
      - [backend/results/apiDocumentation.pdf](#backendresultsapidocumentationpdf)
      - [backend/results/apiDesign.pdf](#backendresultsapidesignpdf)
    - [Frontend Folder](#frontend-folder)
      - [Frontend Results](#frontend-results)
      - [frontend/results/bin/front.sh](#frontendresultsbinfrontsh)
      - [frontend/results/frontendDocumentation.pdf](#frontendresultsfrontenddocumentationpdf)
      - [frontend/results/frontendDesign.md](#frontendresultsfrontenddesignmd)
    - [Executable Folder](#executable-folder)
      - [Executable Results](#executable-results)
        - [executable/bin/README.md](#executablebinreadmemd)
        - [executable/bin/deploy.sh](#executablebindeploysh)

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

##### x/documentation/howTo

This is a folder that contain a set of documents of how to do a determinate task, this is
divided in two folders that are

##### x/documentation/howTo/internals

Contains instructions oriented to the personal of the own departments

##### x/documentation/howTo/externals

Contains instructions oriented to the personal of the other departments

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

#### Administration results

This must be the ProjectLog~targets and timings~Sprint, for more information check the
`2_administration/README.md`, but in overall contain

##### ProjectLog.pdf

Contain the User Histories and its Back Log Items and responsibles

##### Sprint.pdf

Timings, Sprint (basic info), BurnDown and Retrospectives.

<!--

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

-->

### DataBase Folder

As we said each department try to be the most idependient of the others, so in this case we
are going to work each layer separately, so approximations of application where in the same folder
have the three layers, we are going to discant them.

#### DataBase Results

in the case of database, we are going to deliver only two things.

1. Connection Information as Url and credentials
2. Diagrams Schemas (PDF format)

That result in the follow archives

##### dataBase/results/ConnectionInformation.json

An encrypted file Url, user, password, port, etc.

##### dataBase/results/diagrams

This folder contain the different schemas in an pdf format.

##### dataBase/results/bin/database.sh

This script deploy the script that setup and run the database in that is executed

<!--

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

-->

### Backend Folder

As the name indicates, contains all and only the things relationally with backend, and as
result, this contains.

#### Backend Results

#### backend/results/bin/back.sh

This contain the current script to setup the backend.

#### backend/results/apiDocumentation.pdf

Contain the API design with notes to be able to use the api

#### backend/results/apiDesign.pdf

Contain a general view of the api.

<!--

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

-->

### Frontend Folder

As the name indicates, contains all and only the things relationally with frontend, and as
result, this contains.

#### Frontend Results

#### frontend/results/bin/front.sh

This contain the current script to setup the frontend.

#### frontend/results/frontendDocumentation.pdf

Contain the documentation that might be of interest for other departments, as the requirements
to setup the frontend in an local machine or in an production environment

#### frontend/results/frontendDesign.md

Just contain and explain where to explain the prototype, because this is job of the
department of analysis.

<!--

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

-->

### Executable Folder

This is the system department, I change the name because executable is more auto-explicatory
of the intensions of the department.

The objectives of the department are:

- package all the department results and generate an artefact that make easy to setup all
  the project together
- Do and document the tasks required so the project can be in an productive environment.

#### Executable Results

##### executable/bin/README.md

Contain an landing text where what is required to use the result artifacts.

##### executable/bin/deploy.sh

This script is used to deploy the project all together.
