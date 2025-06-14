# RetailDAO Docs Style Guide :pencil2:

Welcome to the RetailDAO Docs Style Guide! This guide helps you write and format docs for our [RetailDAO Docs site](https://github.com/RetailDAO/Docs), which uses [Docusaurus](https://docusaurus.io/) to turn Markdown (`.md`) files into a cool website. Whether you’re adding a new page or fixing a typo, these tips keep our docs consistent, friendly, and easy to read. For how to contribute, check out our [CONTRIBUTING.md](CONTRIBUTING.md) file in this repo.

## Why We Need This :handshake:

Our docs are for retail investors, community members, and newcomers who might not know much about coding. We want them to feel welcomed and empowered, so we write in a clear, conversational way, like explaining something to a friend over coffee.

## Setting Up Your File :file_folder:

Every `.md` file in our docs needs a metadata table at the top to tell Docusaurus how to display it. Here’s how to set it up.

- **File Names**: Use lowercase letters and hyphens, no spaces. Example: "getting-started.md" or "style-guide.md".
- **Metadata Table**: Add this at the very top of every `.md` file. It looks like this:

```
id: unique-id
title: Page Title
hide_title: false
hide_table_of_contents: false
sidebar_label: Short Name
sidebar_position: Number
custom_edit_url: null
description: Short page description
keywords:
  - Keyword1
  - Keyword2
tags: [Tag1, Tag2]
image: static/img/RD_social_card.png
slug: /Page_Name
last_update:
  date: MM/DD/YYYY
  author: Your Name

```

- 'id': A unique, lowercase ID, like "style-guide".

- 'title': A friendly title, like "RetailDAO Docs Style Guide".

- 'sidebar_label': A short name for the sidebar, like "Style Guide".

- 'sidebar_position': A number for sidebar order, like "3".

- 'description': A one-sentence summary, like "Style guide for contributing to RetailDAO Docs".

- 'keywords': 3–5 search words, like "RetailDAO, Documentation, Markdown".

- 'tags': 2–4 categories, like "Documentation, Contributing".

- 'image': Use "static/img/RD_social_card.png" for now.

- 'slug': A URL path, like "/Style_Guide".

- 'last_update': Date like "06/13/2025" and your name or GitHub username, like "Triple Tres".

- 'Main Heading': Right after the metadata, add a # heading matching the title, with an emoji for fun, like "# RetailDAO Docs Style Guide :pencil2:".

## Formatting with Markdown 

Here's how to make your doc look greato in both GitHub and Docusaurus.

    - Headings:
        - Use "#" for the main title.
        - Use "##" for sections and "###" for subsections. Don't go deeper.
        - Add an emoji to headings (optional), like "## Formatting with Markdown :pencil:.
        
    - Paragraphs:
        - Keep them short and simple.
        - Add a blank line between paragraphs for readability.
        - Example: "RetailDAO helps retail investors. Our docs make it easy to learn."

    - Lists: 
        - Use hyphens ("-") for bullet points.
        - Use nubers ("1.", "2.", "3.") for steps or ordered lists.
        - Exmaple:

```
- Join RetailDAO
- Read our docs

1. Clone the repo
2. Write a doc
```
    - Links:
        - Use "Text(URL) for links.
        - For files in this repo, use relative paths, like:
        '[Contributing](CONTRIBUTING.md)' **put the text that will be your link between square brackets "[]", followed without space by parenthesis "()"containing the file or link.
        - For external sites, use full URLS like in this format '[Docusaurus](https://docusaurus.io/docs/create-doc)' 

    - Code Blocks:
        - Use three backticks ("```") with the language name, like "mermaid" for actual flowcharts rendering or "solidity" or "python" for referencing the code language.
        - Close the code block  wit another three backticks ("```").
        - Example: 
        ```javascript
        console.log("Hello, RetailDAO!");
        ```

    - Info Cards: 
        - Use ":::" with "info", "warning", or "note" for colored boxes in our Site.
        - Example: 
        ```
        :::info
        This is a helpful tip!
        :::
        ```
        - Note: On GitHub, these show as plain text, but Docusaurus makes them pretty.
    
    - Images:
        - Store images in "/Branding/[Category]/" in the repo, like "/Branding/graphical-aids/LP-banner.png"
        - to insert an image is the same as a link but with an exclamation mark "!" at the beginning like this: 
        '![Retail_DAO_logo](the-link-from-our-docs-folder-or-any-other-image-from-web) 
        - Use "Alt Text" between the square brackets, to enhance accesibility, like "[Retail_DAO_Banner_for_main_repo]"
        - Check this [Guide](https://docusaurus.io/docs/markdown-features/assets) if you need more details.

    - Mermaid Charts:
        - Use a code block with "```mermaid" to make flowcharts or diagrams.
        
  - Use tools like [Mermaid Live Editor](https://mermaid.live/) to create these.
  - Note: GitHub doesn’t render Mermaid, but Docusaurus does.

## Writing Like a Friend :speech_balloon:

- **Tone**: Write like you’re chatting with a friend—clear, warm, and encouraging.
- **Words**:
  - Use "we" for RetailDAO and "you" for the reader.
  - Keep it simple, like "help" instead of "facilitate".
  - Example: "We’re here to help you learn about investing!"
- **Emojis**: Add a few for personality, like ":handshake:" or ":rocket:", but don’t go overboard. 
- [Here](Retail_DAO_Org/Docs/branding/graphical-aids/emojis.md) in a compilation of most recommended emojis, and its meaning or application guide.
- **Examples**: Include examples, like links to other docs or simple steps.
- **Spelling**: Use American English, like "organize" not "organise".

## How to Contribute :rocket:

Ready to help? Sweet! Follow our [CONTRIBUTING.md](CONTRIBUTING.md) file for steps like, making a branch, and sending a pull request. Use this style guide to make your doc fit right in.

- **Check Your Doc**:
  - Preview it locally with GitHub using "preview".
  - Check spelling.
  - Test links and image paths.
- **Commits**:
  - Use clear messages, like "Add style guide" or "Fix typo in key principles".

## Avoid These Oopsies :warning:

- Don’t skip the metadata table please, it’s how Docusaurus knows what’s what.
- Check that links work, like "[CONTRIBUTING.md](CONTRIBUTING.md)".
- Stick to "#" and "##" for headings, no random "####".
- Update `last_update.date` only for big changes, not small edits.

## Handy Tools :wrench:

- **Docusaurus Docs**: See "[Docusaurus Guide](https://docusaurus.io/docs/markdown-features)" for styling guides.
- **Mermaid Editor**: Use "[Mermaid Live](https://mermaid.live/)" for charts.


---

*Last updated: June 13, 2025*