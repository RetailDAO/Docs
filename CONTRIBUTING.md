# Contributing to Docs Site

Thank you for contributing to our documentation site, built with Docusaurus and hosted on GitHub Pages! This guide explains how to update the Docs site using the **GitHub website**, suitable for contributors with minimal coding experience.

## Overview
- **Repository Structure**: The Docs site source files are in the `docs/` folder under the `retail-DAO-docs` because we store more than our docs site in this repo. The site is built from the `main` branch and deployed to the `gh-pages` branch via GitHub Actions, automatically, that's why we need this **"protection"** process, if all of this sound strange to you I invite you to look at this [basics_tutorial](https://youtu.be/mJ-qvsxPHpY?si=4e7L_xzjvHJWaVkl&t=684) to get an understanding of why we need branches, or Git/GitHub in general.
- **Protected Branches**: The `main` and `gh-pages` branches are protected. You cannot commit directly to them. All changes must go through a **Pull Request (PR)** with at least **one** approval, this ensures no update can break the site.
- **Process**: Use the **GitHub Issues panel** to propose changes, fill out the template form, create a new branch for edits, and submit a PR for review.

## How to Update the Documentation

Follow these steps to propose and implement changes to the Docs site using the GitHub website.

### 1. Open an Issue
1. Go to the **Issues** tab in the repository.
![issues_tab](Docs/branding/graphical-aids/issues_tab.png)
2. Click **New issue** and select the **Docs Update** template.
![new_issue](Docs/branding/graphical-aids/new_issue.png)
3. Fill in the form:
![issue_template](Docs/branding/graphical-aids/issue_template.png)
   - **Title**: Start with `[Docs]`, e.g., `[Docs] Fix typo in Governance guide`.
   - **Description**: Explain the change needed (e.g., fix a typo or add a section).
   - **Location**: Specify the file or section (e.g., `docs/Changes.md` or `Tokenomics section`).
   - **Proposed Changes**: Suggest the fix or new text or section.
4. Click **Submit new issue**.
5. Wait for a maintainer to review and approve the issue.

### 2. Create a New Branch and Edit Files
1. Once the issue is approved, go to the **Code** tab.
2. Navigate to the file to edit (e.g., `docs/Changes.md`) Notice the right route to find the files to edit: `Docs->retail-DAO-docs->docs`.
![rd_docs_folder](/Retail_DAO_Org/Docs/branding/graphical-aids/docs_ret_docs.png)

3. Click the file, then click the **Edit** button (pencil icon).
4. GitHub will prompt you to create a new branch:
   - Name it descriptively, e.g., `docs/fix-typo-issue-123` (include the issue number).
   - Click **Create branch and edit file**.
5. Make your changes in the editor.
![md_structure](Retail_DAO_Org/Docs/branding/graphical-aids/md_struct.png)
    - At the top of each document is where the Metadata is stored, you should add yourself as an author, and update the date under the `last update` section and start edit the file to be rendered in the site after the `---` signs. 
6. Add a commit message, e.g., “Fix typo in Governance.md for #123”.
7. Select **Commit directly to the `docs/fix-typo-issue-123` branch**.
8. Click **Commit changes**. (Repeat this process from step 2 "Navigate" to step 7 "Select Comm..." for **each change**, to avoid information loss due to **browser refreshing**) Be sure you're still on your same branch.

### 3. Open a Pull Request (PR)
1. After committing all your changes, click **Compare & pull request** (or go to the **Pull requests** tab and click **New pull request**).
2. Ensure the PR compares your branch (e.g., `docs/fix-typo-issue-123`) to `main`.
3. Fill in the PR form:
   - **Title**: Use the issue title, e.g., `[Docs] Fix typo in API guide`.
   - **Description**: Summarize your changes briefly and at the end of the description Write **“Fixes #---”** (the number of your issue) to link the issue, (this is important as the `Fixes #---` close automatically the issue).
4. Assign a reviewer (optional) or yourself if you have the permissions, and click **Create pull request**.

### 4. Address Review Feedback
1. Check the PR for comments or suggested changes.
2. To edit:
   - Go to the **Code** tab, select your branch, (**no need to create a new branch** _let's keep clean our repo_) and edit the file again.
   - Commit changes to the same branch.
3. Reply to comments to resolve discussions, (simple comments or statements is sufficient but required before merging).
4. Wait for at least **one** approval.

### 5. Merge and Deploy
1. After approval and passing checks (including the “Deploy to GitHub Pages” Action), a maintainer will merge the PR into `main`.
2. The issue auto-closes if “Fixes #---” was used.
3. A GitHub Action rebuilds the Docusaurus site and deploys it to `gh-pages` **on auto**, check for the progress in the **actions tab**, (click the dot to see the progress [Check_this_demo](https://youtu.be/5XhxR9Vs6zc?si=1PGsLoZWtQLJoepv&t=222)) and wait for successful deployment, if error, contact team, (most of the times are just broken links to images or internal references, **be sure your syntax is right**, looking at other examples of the syntax you need already deployed and functional in other document files).
4. Verify the update on the Docs site ([`https://retaildao.github.io/Docs`](https://retaildao.github.io/Docs/)).

## Branch Protection Rules
- **Main and gh-pages**: Are Protected to **prevent direct commits that can break the site**, that's why we need this review and documentation workflow.
- **Requirements**:
  - **PRs** require at least **one** approval.
  - **All** comments must be resolved.
  - The “Deploy to GitHub Pages” Action must pass, as set in the branch protection rule, so any error due to broken link or whatever, should be warned before merge and re-deployment.
  - Allowed merge methods: Merge, Squash, Rebase. (you don't need to worry about this if you're just updating content in the Docs site, but if you want to lear more check this [tutorial](https://youtu.be/0chZFIZLR_0?si=2Tz3mJHK1tSDxHqr&t=7) 

## Best Practices
- **Be Descriptive**: Provide **clear details in issues and PRs** to streamline the review process.
- **Reference Issues**: Use **“Fixes #123”** (number of your issue) in PRs to link and auto-close issues.
- **Check the Site**: After merging, confirm changes are live on the Docs site.
- **Ask for Help**: Comment in issues or contact maintainers if stuck.

## Additional Resources
- **Markdown Syntax**: [CommonMark/Help](https://commonmark.org/help/)
- **Git/GitHub Easy Tutorial**: [Git/GitHub_for_dummies](https://youtu.be/mJ-qvsxPHpY?si=QEci3O6AET1mKW3I&t=55)
- **Docusaurus Guides**: [Guide_on_creating_and_referencing_new_files](https://docusaurus.io/docs/create-doc)
- **Team Contact**: Reach out via [ISSUES](https://github.com/RetailDAO/Docs/issues) for support.

Thank you for helping improve our documentation!