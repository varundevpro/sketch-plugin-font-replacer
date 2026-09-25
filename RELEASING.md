# Developer Notes: Releasing and Publishing

This file contains instructions for maintaining and publishing updates for this Sketch plugin. 

## 1. Creating a New Plugin Zip
Whenever you make changes to the plugin code and are ready to release a new version, you must create a new `.zip` archive of the plugin bundle. 

Run this command in the root of the repository:
```bash
zip -r font-replacer.sketchplugin.zip font-replacer.sketchplugin
```

## 2. Publishing a GitHub Release
GitHub Releases are where you host the actual downloadable zip files.

1. Go to your repository on GitHub.
2. Click on **Releases** on the right sidebar, then click **Draft a new release**.
3. Choose a new tag (e.g., `v0.1.12`) that matches your new version.
4. Write down the release notes (what changed, what bugs were fixed).
5. **Attach the `font-replacer.sketchplugin.zip` file** by dragging it into the assets box.
6. Click **Publish release**.

## 3. Updating the Appcast (For Auto-Updates)
The `.appcast.json` file is what Sketch reads to know if a new version is available. 

After publishing your GitHub Release:
1. Open `.appcast.json`.
2. Update the `versionID` to your new version number (e.g., `"0.1.12"`).
3. Update the `downloadURL` to point to the new `.zip` asset you just uploaded to GitHub Releases. The format usually looks like this:
   `https://github.com/varundevpro/sketch-plugin-font-replacer/releases/download/v0.1.12/font-replacer.sketchplugin.zip`
4. Commit and push this change to your `main` branch.

## 4. Hosting on GitHub Pages
Because the `.appcast.json` needs to be accessible via a public URL, we host it on GitHub Pages.
1. Make sure GitHub pages is enabled for this repository: **Settings > Pages > Build and deployment (Select `main` branch)**.
2. Your `.appcast.json` is automatically hosted at:
   `https://<username>.github.io/sketch-plugin-font-replacer/.appcast.json`

> **Note:** The `appcast` key inside your `manifest.json` MUST point to this GitHub Pages URL for auto-updates to work inside Sketch.
