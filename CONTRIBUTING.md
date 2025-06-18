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
   ![issue_template](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/issue_template.png)
   - **Title**: Use `[Docs]`, e.g., `[Docs] Fix typo in Governance guide`.
   - **Description**: Specify the change (e.g., typo fix or new section).
   - **Location**: Note the file or section (e.g., `docs/Changes.md`).
   - **Proposed Changes**: Detail the intended update.
4. Click **"Create"** button to submit it and await maintainer approval.

### 2. Edit Files and Create a New Branch
1. After approval, navigate to the **Code** tab and find the file in `retail-DAO-docs -> docs -> the-section-folder-storing-the-file-you-want-to-change` (e.g., `retail-DAO-docs/docs/Onboarding_and_Participation/How_to_Join.md`).  
   ![rd_docs_folder](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/docs_ret_docs.png)
2. Open the file and click the **Edit** button (pencil icon).
3. Edit the content:  
   - Update metadata (add yourself as an author, adjust `last update` date). Modify content below the `---` lines.  
   ![md_structure](https://github.com/RetailDAO/Docs/blob/main/branding/graphical-aids/md_struct.png)
4. Click **Commit changes**, write a message (e.g., “Fix typo in Governance.md for #123”) type "#---" your number of issue at the end of the message to link your commit to your recently opened issue. 
5. By default you will be prompted to create a **new branch** to commit your changes. 
6. Name the new branch (e.g., `docs/fix-typo-issue-123`) and commit to it.
7. If you need to make just 1 simple edit on 1 file, create a pull request right after.
8. For further edits on two or more files on your current session, go again to the `<code>` tab without filling the pull request form, and **ensure you switch to your recently created branch using the repository dropdown** at the top of the page where it says **main**, do this to avoid commiting each individual change to a new separate branch, and be sure all your proposed changes are stored in one single branch **before** creating a pull request and merging.

### 3. Open a Pull Request (PR)
1. Click **Compare & pull request** button at the top, or go to the **Pull requests** tab and select **New pull request**.
2. Compare your branch (e.g., `docs/fix-typo-issue-123`) to `main`.
3. Fill out the PR:  
   - **Title**: Match the issue, e.g., `[Docs] Fix typo in Governance file`.  
   - **Description**: Summarize changes and add **“Fixes #123”** to link and close your issue.
4. Submit the PR and optionally assign a reviewer.

### 4. Address Review Feedback
1. Review comments or requested changes in the PR.
2. To edit:  
   - Return to the **Code** tab, select your branch, and update the file.  
   - Commit to the same branch.
3. Respond to feedback and resolve discussions.
4. Await at least one approval.

### 5. Merge and Deploy
1. Once approved and checks pass (including “Deploy to GitHub Pages” Action), a maintainer will merge the PR into `main`.
2. The linked issue closes if “Fixes #123” was used.
3. A GitHub Action rebuilds and deploys to `gh-pages`. Check the **Actions** tab ([demo](https://youtu.be/5XhxR9Vs6zc?si=1PGsLoZWtQLJoepv&t=222)).
4. Confirm changes on the Docs site ([`https://retaildao.github.io/Docs`](https://retaildao.github.io/Docs/)).

## Branch Protection Rules
- **Protected Branches**: `main` and `gh-pages` block direct commits.
- **Requirements**:  
  - PRs need one approval.  
  - Resolve all comments.  
  - “Deploy to GitHub Pages” Action must succeed.  
  - Merge options: Merge, Squash, Rebase.

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
