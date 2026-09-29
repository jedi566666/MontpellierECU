# MATRIX Pro — User guide

A local workstation for directing the workshop’s AI specialists.

Documented as of: September 29, 2026.

- [Web version](https://mtptoken.pages.dev/en/matrix-pro/)
- [PDF EN](https://mtptoken.pages.dev/assets/matrix-pro/en.pdf)
- [French version](https://mtptoken.pages.dev/matrix-pro/)

## What MATRIX Pro is

MATRIX Pro is a local Windows application for Mehdi’s workshop. It brings together prompts to AI specialists, their answers, a PowerShell terminal operated by Mehdi, and file tools limited to authorised folders. It is not a public MTP service, and the MTP website cannot access your computer.

## Send a prompt

Choose a project and a specialist, write your request, then click Send. The answer appears in MATRIX. Starting the app does not call a model. Remote AI services are called only when a request is sent; availability and cost depend on the provider and route selected.

## Have two agents work together

Select exactly two specialists, then click “Confronter 2 agents ensemble” (compare two agents). Both receive the same prompt and answer in parallel. Their answers are shown separately for comparison; this does not automatically pass the first agent’s answer to the second.

## Sequential relay and team broadcast

Sequential relay sends the request to selected specialists one after another, after each reply. “Diffuser à tous en parallèle” (broadcast to everyone in parallel) sends the same prompt to every catalogue route after confirmation. Each call may incur provider charges; an unavailable route can fail while other agents still respond.

## Read the latest documentation

Put files in C:/Users/msoui/Downloads/MATRIX-Documents. “Lire la doc récente · agent sélectionné” (read latest document · selected agent) selects the supported file with the newest modification time, adds its path and date to your existing prompt, enables folder access for that send, then asks the selected specialist to read it. Supported types: PDF, DOCX, TXT, MD, RST, CSV and LOG. Scanned PDFs may use local OCR. Text passed to the model is capped at 36,000 characters per read; request specific pages for a long PDF.

## Grant access to files or the project

Access to the active project and access to MATRIX-Documents are separate permissions, both checked by default in the documented version. Tools can list, read and write within authorised roots, subject to their limits. File replacements are backed up and require a previously read hash. These tools do not give models a general-purpose shell; system, authentication and configuration paths remain protected. Check the permission boxes and files before sending: documents read by a model are transmitted to that model provider.

## Terminal and agent replies

The PowerShell terminal is separate from the model conversation. Mehdi writes and starts each command himself. A model cannot use the terminal to run arbitrary commands. The Matrix feed displays replies and interactions supported by the application. Private conversations in external apps such as Codex, Jules or Cline are not captured automatically.

## GitHub and the MTP website

The site + GitHub specialist can prepare or change files in its authorised local repository. A local change has not yet been published. Review the changes, then explicitly commit and push them. After pushing, check the website deployment separately: a GitHub push does not prove that Cloudflare has finished deploying.

## Limits and good practice

Model answers can be wrong and routes can be unavailable. Review changes before publishing them. Do not put a wallet recovery phrase, private key, password or API key in shared documents. Text in a PDF is not permission: documents are references to analyse, not system instructions.
