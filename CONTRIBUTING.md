# Contributing to Docs Site

Thank you for contributing to our documentation site, built with Docusaurus and hosted on GitHub Pages! This guide outlines how to update the Docs site using the **GitHub website**.

## Overview
- **Repository Structure**: Source files are in the `docs/` folder within `retail-DAO-docs`. The site is built from the `main` branch and deployed to `gh-pages` via GitHub Actions.
- **Protected Branches**: `main` and `gh-pages` require changes through a Pull Request (PR) with at least one approval.
- **Process**: Propose changes and document it via GitHub Issues, edit your intended files on a **new branch**, and submit a **PR** for review.

## How to Update the Documentation

Follow these steps to update the Docs site.

### 1. Open an Issue
1. Go to the **Issues** tab.  
   ![issues_tab](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/issues_tab.png)
2. Select **New issue** and choose the **Docs Update** template.  
   ![new_issue](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/new_issue.png)
3. Complete the form:    
   - **Title**: Use `[Docs]`, e.g., `[Docs] Fix typo in Governance guide`.
   - **Description**: Specify the change (e.g., typo fix or new section).
   - **Location**: Note the file or section (e.g., `docs/Changes.md`).
      - You can copy the exact route of your file at the top of the page, right next to the branch selector dropdown.
![copy_path](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/screenshots/copy_path.png)
   - **Proposed Changes**: Detail the intended update.
    ![issue_template](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/issue_template.png)

4. Click **"Create"** button to submit it and await maintainer approval.
   - You should see a page like this, now you're ready to implement your changes.
![issue_description](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/screenshots/issue_desc.png)

### 2. Edit Files and Create a New Branch
1. After approval, (for further reference of your accurate issue number "#") open in a new browser tab the **Code** section and find the file in `retail-DAO-docs -> docs -> the-section-folder-storing-the-file-you-want-to-change` (e.g., `retail-DAO-docs/docs/Onboarding_and_Participation/How_to_Join.md`).  
   ![rd_docs_folder](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/docs_ret_docs.png)
2. Open the file and click the **Edit** button (pencil icon).
![edit_button](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/screenshots/pencil_edit_but.png)

3. Edit the content:  
   - Update metadata (add yourself as an author, adjust `last update` date). Modify content below the `---` lines.  
   ![md_structure](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/md_struct.png)
4. Click **Commit changes**, in the showing window, write a message (e.g., “Fix typo in Governance.md for #123”) type "#---" your number of issue at the end of the message to link your commit to your recently opened issue. 
5. By default you will be prompted to create a **new branch** and **start a pull request** to commit your changes.
![commit_window_1](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/screenshots/commit_chang_window.png) 

6. Name the new branch (e.g., **`yourusername-fix-issue-123`**) to track your issue with your branch, and commit to it.
   - By default `yourusername-patch-1`is set to the new branch name, be sure to change it.
7. Click `Propose Changes` button.
 
   - **If you need to make just `1` edit on `1` file, fill the form and create a pull request right after, in the window showed** and skip substep #8, if you need more changes keep reading.

8. For further edits on two or more files on your current session, go again to the `<code>` tab without filling the pull request form, and **ensure you switch to your recently created branch using the repository dropdown** at the top of the page where it says **main**. 
![switch_branches](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/screenshots/switch_branch.png)

Do this to avoid commiting each individual change to a new separate branch, and be sure all your proposed changes are stored in one single branch **before** creating a pull request and merging.
   - Go to the other(s) file(s) location and click again the **pencil button to edit**, **type your changes** and **update the date and contributor**, and click **`commit changes`**.

   - Link again this specific commit to your issue number by typing "for #---" at the end of the description. 
   - This time by default is selected the `commit directly to the "your-branch-name" branch`.
      keep it that way, there's no need for a new branch for each commit. 
![commit_change2](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/screenshots/commit_chang_window_2.png)

   - When you are finished with your current changes session, open a Pull Request. 

### 3. Open a Pull Request (PR)
1. Go to the **Pull requests** tab and Click **Compare & pull request** button at the top.
![open_PR_1](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/screenshots/open_PR_1.png)

2. Compare your branch (e.g., `docs/fix-typo-issue-123`) to `main`.
   - Before filling the form scroll down you to see the files you changed, in its previous version and with your changes implemented, you can set the view from `unified` to `split` to quick review them side by side.
![compare_PR](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/screenshots/compare_&_PR.png)
![split_review](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/screenshots/split_review.png)


3. Fill out the PR:  
   - **Title**: Match the issue, e.g., `[Docs] Fix typo in Governance file`.  
   - **Description**: Summarize changes and add **“Fixes #---”** with your issue number, to link and close your issue.
4. Click `Create pull request`button.
   - You'll find at your opened PR window, where some checks need to be passed before merging to the main branch.
![open_PR_2](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/screenshots/open_PR_2.png)
   - Wait from 50-10mins, for the deployment checks to pass, at this point our system is automatically reporting the build test on the site files with our proposed changes. If there's any error with our updates, we are going to be warned before touching the main branch and site since this check steps. 
   - **So be confident none of your changes or mistakes are messing up with the site, you're completely safe!**
![PR_checks](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/screenshots/PR_checks.png)

### 4. Address Review Feedback
1. Review comments or requested changes in the PR.
2. To edit:  
   - Return to the **Code** tab, select your branch, and update the file.  
   - Commit to the same branch.
3. Respond to feedback and resolve discussions.
4. Await at least one approval.

### 5. Merge and Deploy
1. Once approved and checks pass (including “Deploy to GitHub Pages” Action), a maintainer will merge the PR into `main`.
![checks_passed](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/screenshots/checks_success.png)

2. The linked issue closes if “Fixes #---” was used.
3. After correct merging, you'll be prompted to delete your branch, (if its not deleted yet) go on and delete it to keep clean our branches structure with just 2 branches: `main` and `gh-pages`
![delete_branch](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/screenshots/del_branch.png)

3. A GitHub Action rebuilds and deploys to `gh-pages`. Check the **Actions** tab ([demo](https://youtu.be/5XhxR9Vs6zc?si=1PGsLoZWtQLJoepv&t=222)).
4. Confirm changes on the Docs site ([`https://retaildao.github.io/Docs`](https://retaildao.github.io/Docs/)).

## Branch Protection Rules
- **Protected Branches**: `main` and `gh-pages` block direct commits.
- **Requirements**:  
  - PRs need one approval.  
  - Resolve all comments.  
  - `Deploy to GitHub Pages` and `build-report-status` Actions must succeed before merging to main.

## Best Practices
- **Clarity**: Use descriptive titles and details in issues/PRs.
- **Linking**: Include **“Fixes #123”** in PRs to auto-close issues.
- **Verification**: Check the Docs site post-merge going to the `settings tab` and then to the `pages` section on the sidebar.
- **Support**: Comment in issues or contact maintainers if needed.

## Additional Resources
- **Markdown**: [CommonMark/Help](https://commonmark.org/help/)
- **Git/GitHub**: [Tutorial](https://youtu.be/mJ-qvsxPHpY?si=QEci3O6AET1mKW3I&t=55)
- **Docusaurus**: [Guide](https://docusaurus.io/docs/create-doc)
- **Contact**: Use [ISSUES](https://github.com/RetailDAO/Docs/issues) for assistance.

Thank you for enhancing our documentation!
