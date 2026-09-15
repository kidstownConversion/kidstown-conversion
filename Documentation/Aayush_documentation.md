# KidsTown School and Museum Conversion: Documentation of AI Use

**Student:** Aayush Lohani
**Project:** KidsTown Perl/CGI to JavaScript Conversion
**Assigned Sections:** School and Museum
**AI Tool:** ChatGPT through its Codex coding environment

## 1. Project Overview

Our team is converting an older educational website called KidsTown into a JavaScript single page application. The original website uses Perl scripts and a CGI program to generate pages and handle activities. The goal is to move the activity logic into the browser so the website can work without an application backend.

My assigned sections were School and Museum. These sections include the FarmTown field trip, Word Fun, the word scramble game, the rainbow story, and the planetarium quiz.

I used ChatGPT to help inspect the original files, convert the code, create automated tests, and explain how to run the converted sections locally. It also helped me with installing development tools and preparing my work in Git.

This documentation describes the work completed during that process, the problems we encountered, and the parts that still need to be checked.

## 2. Giving ChatGPT the Project Context

The original repository contained many Perl files in different folders. Instead of opening every file and copying its contents into the conversation, I uploaded the repository as a ZIP file.

I also provided a screenshot showing my assigned sections, our team conversation about the project, and the main CGI code. This gave ChatGPT information about both the source code and our team's expectations.

The team discussion explained that the project was supposed to become a browser-only application using JavaScript modules. It also showed that the shared router and foundation were assigned separately from my School and Museum work.

I asked ChatGPT to focus only on my assigned sections. I did not want it to convert or replace other team members' work.

My main instructions were to keep one JavaScript file for each original Perl file, preserve recognizable filenames, keep functions separate, and return the converted work in a separate ZIP.

These instructions mattered because I wanted to compare each converted file with its original version and transfer my assigned work into the team repository.

## 3. How Responsibilities Were Divided

ChatGPT handled most of the code generation for this conversion. It inspected the uploaded source, produced the JavaScript files, created the test code, and ran automated checks in its coding environment.

My responsibilities included supplying the correct project materials, setting the scope, explaining the required file structure, questioning results that seemed incorrect, and running the local setup steps on my computer.

I also handled the local Git commands and decided which folders I wanted to transfer into the team repository.

This was an AI-assisted implementation. I would not describe the generated code as something I wrote entirely on my own. The AI produced the code based on my instructions, while I remained responsible for reviewing the work and checking how it fit into our team project.

## 4. Understanding the Original CGI Structure

Before converting the scripts, ChatGPT examined how the original website selected and generated its pages.

The original system uses a parameter called `KEY`. When a user opens a page or submits an activity, the CGI program reads the request and uses the KEY to look up entries in `kt.db`.

The program also reads `kt.ini`, which contains configuration such as directory paths. It then runs the scripts associated with the selected KEY. Those scripts print the HTML that becomes the page shown in the browser.

A single KEY can run more than one script. For example, a FarmTown route can include an animal page, an animal navigation section, and the general FarmTown navigation.

That order matters. Some original files open HTML elements that another file closes. Combining the files in the wrong order could affect how the page displays.

The games also carry information between requests, such as difficulty, the selected word, previous guesses, and quiz history. The JavaScript version needed to keep track of that information without depending on the Perl server.

This showed why the task required more than changing file extensions. The page content, navigation, input handling, and game state all had to be considered.

## 5. Verifying the Number of Files

There was a disagreement about the number of scripts. ChatGPT initially mentioned 46 files and later corrected the count to 45. I also thought the School section had 32 scripts and asked it to add the missing one.

To check this, ChatGPT compared the actual filenames inside the original ZIP with the converted ZIP.

The final count was:

| Section | Original Perl Files | Converted JavaScript Files |
| ------- | ------------------: | -------------------------: |
| School  |                  31 |                         31 |
| Museum  |                  14 |                         14 |
| Total   |                  45 |                         45 |

The comparison did not find any missing files.

One confusing detail was that the original FarmTown filenames skipped `FarmTown4-3.pl`. That file was not present in the original uploaded repository, so there was no source file to convert.

This was an example of checking both my assumption and the AI's answer against evidence. The correct count came from comparing the files, not from trusting an earlier estimate.

## 6. Preserving the File and Function Structure

The converted files were placed in `script/school/` and `script/museum/`.

Each original Perl file had a corresponding JavaScript file with the same base name and capitalization. For example, `FarmTown1.pl` became `FarmTown1.js`, and `wizard.pl` became `wizard.js`.

The active named Perl functions were kept as separate named JavaScript functions in their matching files.

For example, `museum/c_parse.js` retained `GetRecord` and `CountRecords`. The quiz file retained its 11 named functions. Word Fun retained the functions named `header`, `footer`, and `intro`.

There was one difference from my original request about keeping the function count unchanged. Some Perl files also contained executable code in a separate `MAIN` block. ChatGPT wrapped that existing main logic in a JavaScript entry function called `main(ctx)`.

This allows the router to run the activity again after a form submission. The entry function was added around the original main logic; the existing named functions were not combined.

The 36 simpler page files exported HTML template strings without adding functions. These templates use configuration placeholders for values such as image paths and navigation links.

## 7. Converting the School Activities

### FarmTown

Most FarmTown files contained educational text, pictures, and links. Their conversion mainly involved turning the printed HTML into JavaScript template data.

The original page content and images were preserved. The animal navigation, plant navigation, and general FarmTown navigation remained separate files.

The conversion also preserved the order in which the section's route entries load those fragments.

This was a conversion of the existing pages, not a visual redesign. Some of the older formatting and wording remain.

### Word Scramble

The word scramble game required more logic. It needed to load a word from the chosen difficulty file, mix its letters, display a picture clue, check the player's answer, and count valid attempts.

The converted version includes difficulty selection, answer validation, feedback, replay, and changing levels.

ChatGPT changed the original scrambling approach to avoid a loop that could keep retrying indefinitely. The replacement uses a shuffle with a limited fallback.

The converted game also loads the answer and picture from the selected data record instead of trusting hidden answer or picture values submitted by the browser.

### Word Fun

Word Fun lets the player reveal a word by selecting letters.

The JavaScript version keeps track of selected letters, reveals matching letters, and displays a success message when the word is complete. It also supports replay and changing difficulty.

Used letters are disabled, and selecting the same letter again does not increase the attempt count. This differs from the original behavior, where already-used letters could act as reset buttons.

That change was documented so the team could review it rather than assuming every detail exactly matched the original implementation.

## 8. Converting the Museum Activities

### Rainbow Story and Museum Pages

The Museum introduction, color exhibition, rainbow story, and planetarium introduction were mainly template conversions.

The original text, pictures, and links were retained. Each page remained in its own JavaScript file.

### Planetarium Quiz

The planetarium quiz was one of the more complex parts of my assignment.

It loads questions from two datasets. Each question has four picture choices and feedback associated with those choices. The game also tracks previously shown questions and previous attempts.

The converted version handles correct and incorrect answers, trying again, skipping questions, and reaching the end of a category.

ChatGPT identified a problem in the original answer-reading code. The code searched forward to `CORRECT_ANS`, even though the correct answer could appear in any of the four positions.

The JavaScript version matches the feedback with the picture choices in their source order. Automated tests checked every answer position in both datasets.

The environment settings, such as background and text colors, were also changed to be read by name instead of relying on fixed line positions.

The original educational content was preserved. This means the conversion still includes dated astronomy statements from the source material. Updating those facts is a separate content-review task.

## 9. Replacing the CGI and File Helpers

The original helper libraries depended on server features such as request input, environment variables, and filesystem access.

The converted functions receive their inputs directly and use browser-compatible operations.

A context object called `ctx` supplies the activities with request parameters, configuration, a data-loading function, and local state. This makes the required information explicit instead of relying on shared Perl variables.

Static data files are loaded through the browser. Functions that previously wrote or removed server records were adapted to change records in a local JavaScript Map.

Those operations do not modify the repository or a remote server. Their changes are not automatically permanent.

The team notes mentioned state storage, but the completed shared storage interface was not supplied during conversion. The package therefore did not assume a particular localStorage format.

## 10. Testing the Conversion

ChatGPT created and ran automated tests in its coding environment.

The final recorded test run had 10 passing tests and no failures. These were grouped tests containing several checks.

The tests covered:

* The correspondence between the original files and converted files.
* Preservation of the original named functions.
* Output from all 37 School and Museum routes.
* Reading the activity datasets.
* Form input and HTML escaping.
* Word-game progress, validation, replay, and changing difficulty.
* Quiz feedback, retries, skipping, and completion.
* Local record operations.
* The existence of referenced image files.

The quiz checks covered all 112 answer positions across 28 questions in the two datasets.

An earlier test failed because it assumed that each School difficulty file had 15 records. Checking the source showed that Easy had 15, Medium had 16, and Difficult had 8. The test was corrected to match the actual data.

This was another reminder that AI-generated tests can contain incorrect assumptions.

Automated browser testing was attempted but could not be completed. The environment had Playwright available, but Chromium was not installed, and the browser download timed out.

The test report therefore separated the passing code tests from browser behavior that had not been verified.

## 11. Running the Preview on My Computer

My computer did not initially have Python installed. Both `python` and `py` failed when I tried to start the local server.

After clarifying that Python was not installed on this computer, I installed it and reopened PowerShell in the project folder.

The local preview was started using:

`py -m http.server 8000`

The preview address was:

`http://localhost:8000/preview.html`

Python was only used to serve the files locally. The converted activities still ran as JavaScript.

I successfully opened the preview and shared a screenshot showing the School page, its image, and its activity links.

This confirmed that the preview loaded on my computer. It did not prove that every game, button, or route worked. ChatGPT suggested trying wrong answers, correct answers, replay, and navigation as the next manual checks.

The conversation does not confirm that I completed all of those checks.

## 12. Preparing the Work in Git

I installed Git using PowerShell. After installation, I reopened the terminal so Windows could recognize the command.

Inside my cloned `kidstown-conversion` repository, I checked the repository status. Git showed that I was on `main` and that the copied `script/` folder was untracked.

I pulled the latest `main`, and Git reported that it was already up to date.

I then created a separate branch named `aayush-school-museum`. This followed our team's plan to work on individual branches and use pull requests before merging changes into `main`.

The next status output listed the 45 School and Museum JavaScript files. I staged those folders specifically.

My first commit attempt failed because Git did not have an author name and email configured. ChatGPT explained how to set those values and clarified the difference between a GitHub username, a commit author name, a repository folder, and a branch.

Commands were provided to retry the commit and push the branch. However, the conversation does not include a successful commit or push result. Those steps should not be marked complete until they are verified.

## 13. Integration Issue Found During Transfer

I wanted to copy only my School and Museum scripts into the team repository and keep the other project files as they were.

At that point, ChatGPT explained that some converted scripts imported `integration/context.js`.

I checked for that file in the cloned repository, and PowerShell returned `False`.

This showed a limitation of the conversion package. The scripts were separated by source file, but they still depended on support code outside the two script folders.

The standalone preview included that support code. Copying only the script folders into the team repository did not include everything needed to run them.

Before the team can treat the conversion as integrated, we need to include the required support code or adapt the scripts to the shared foundation already used in our repository.

Pushing a branch saves and shares the work. It does not automatically resolve missing dependencies or confirm that the application runs.

## 14. What I Learned from Using AI

Providing the actual repository and clear instructions made ChatGPT useful for this task. It could inspect related files, generate the conversion, and create tests without requiring me to paste each script individually.

However, the process also showed that AI output needs review. The file-count confusion, the incorrect test assumption, and the missing integration dependency were all problems that needed further checking.

The biggest issue was that the AI did not have the team's completed router interface when it generated the conversion. It created an isolated package that could be previewed, but that package was not automatically compatible with the team repository.

For future work, I would provide the shared router and module interface before requesting the section conversion. I would also test the code inside the combined team application before describing it as finished.

My main takeaway is that AI can help with implementation and testing, but I still need to understand what it generated, check its assumptions, and confirm how it connects to the rest of the project.

## 15. Current Status

The 45-file JavaScript conversion package was produced, and its automated tests passed. I also opened the School preview successfully on my computer.

The remaining work includes completing manual browser checks, resolving the integration dependency, testing the sections with the team's shared router, and confirming the commit, push, and pull request process.

ChatGPT generated the implementation, automated tests, and this documentation draft. My contributions included supplying the source material, setting the scope, requesting the file structure, questioning the file count, running the local setup, opening the preview, and preparing the files in Git.

This report records the work supported by the conversation. It does not claim that the full website has been merged, deployed, or completely tested.

