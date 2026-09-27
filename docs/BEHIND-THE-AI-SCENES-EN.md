# Behind the AI scenes — How we build our projects

Documented state: 2026-09-27.

Ideas, creations, a few stubborn cables. And a human keeping the direction.

[Illustrated edition](https://mtptoken.pages.dev/en/behind-the-ai-scenes/) · [Français](ENVERS-DU-DECOR-IA-FR.md)

## It runs. And it is taking shape.

It starts with a story to tell and a city to bring to life. De l’écran à l’abandon becomes a graphic novel, then a creative world in Godot. Alongside it, Montpellier ECU develops its digital tools. Mehdi brings together creative direction, production decisions and one practical rule: preserve what looks good and works, then improve it.

As of September 27, 2026, all five Ultra Plus volumes have received their V approval: 375 pages altogether. The game has a playable Alpha 0.1, an identified Windows export and thirty seconds of gameplay footage. Monia has a documented portable Windows beta. The MTP portal brings together its services and community catalogue. This is our starting point: creations people can open, explore and see.

The workshop sometimes resembles a small company where everyone talks at once and the director has to remind them where the folder lives. Good news: we have now written the address on the door.

## Four projects, one human direction.

The graphic novel carries the autobiographical story. The manuscript and facts supplied by the author govern its content; an appealing invention does not become a memory. The game explores a playable Montpellier, with fictional exercises explicitly distinguished from autobiography. The author decides meaning, atmosphere, characters and what deserves V approval.

MTP App is covered here through the recovered Monia sources and portal interfaces. MTP Token is the separate crypto-asset project on Base, accompanied by a Wallet, a Live observatory and a community marketplace. Their shared editorial identity connects them; it does not establish automatic technical integration between every application.

An essential example: the game’s euros, inventory and economy are fictional local systems. A financial bridge between MTP and Godot remains a development idea, outside the delivered Alpha. We can describe one big family without claiming everybody already has the keys to the same car.

## How we got here.

Conversations initially develop ideas, page breakdowns, references and assignments. The documents gradually become more structured: what to make, which sources to respect, which creations to preserve and how to recognise a usable result. Montpellier research notably produces a reference bible for monuments and the city’s visual identity.

The game preserves its first 2D experience, followed by a 3D prototype based on OpenStreetMap. Official buildings, successive harmonisation passes, recovery of Kimi’s work and the Alpha form a continuous development story. Older exports are kept as the project advances. For the graphic novel, local corrections and volume-by-volume approvals lead to five approved Ultra Plus editions.

Meanwhile, Frankenstein experiments connect models to tools on the workstation. The PDF describes phases 1, 2, 3 and V5. These are narrative markers in a reconstruction, rather than an independently established sequence of releases. The practical progress is clear: instructions travel better, files remain traceable and work can resume without reinventing the studio every morning.

## Our method: from a large prompt to an actual file.

1. Mehdi states a concrete intention: improve a monument, correct a page, finish an integration. 2. The agent reads the current register and handover instructions. 3. It inspects the relevant files before making changes. 4. It carries out a bounded, reversible work package. 5. The result is opened in its real environment. 6. A report records delivered files and checks. 7. Mehdi judges the artistic result and grants V approval when he chooses.

A useful prompt names the intended result, sources, protected elements, scope and completion criteria. “Make Montpellier better” conveys ambition. “Improve this belvedere while preserving its official placement, then show it inside the scene” also provides a method. The large prompt becomes a work order; length alone cannot replace a precise assignment.

At the end of a pass, we distinguish a proposal, a created file, an integrated element, verified behaviour and producer approval. That lets us celebrate real progress at the right moment. A script does not award V: that is Mehdi’s stamp, and the stamp stays in the director’s office.

## The workshop remembers through files.

ETAT_PROJET.md describes the current state; VERSION_COURANTE.json identifies the export; 00_REPRISE_K3.md gives handover priorities. A pass report adds files read and changed, available evidence and the next useful action. The next contributor starts with these documents, then checks their contents against the filesystem.

A precise path prevents work on an obsolete copy. A SHA-256 fingerprint identifies an exact PDF or game pack. It cannot tell us whether the work is beautiful; it tells us which work we mean. An execution log records what happened, including errors. A screenshot shows the appearance. These pieces support one another.

The tools also maintain conversation histories and shared local memory. They help transfer context without automatically making an earlier answer an established fact. Our least spectacular innovation is therefore one of the most useful: a small Markdown file that prevents five intelligences from searching for five different versions of the fountain.

## Who does what in this cheerful team?

Mehdi is author, producer, creative director and tester. ChatGPT supports thinking, assignment preparation and critical reading. Documentary research gathers references. Qwen VL acts as a visual adviser when images are actually supplied. Codex works with available files and tools to integrate, correct and prepare deliveries.

Kimi K3, GLM and Mistral appear in development work, bridge experiments and finishing assignments. MONSTRE provides an interface for selecting a profile and passing it a documented mission. This does not mean every model runs simultaneously all the time: passes are selected to match the need.

Two Qwen Coder workstations have also been prepared: a Godot creator for scenes, shapes and textures through tools, and a technician for integration. Preparation is not an already proven production campaign. A job title does not magically give a model hands. Here too, we must supply tools and explain where to put the work.

## Speaking, seeing, creating and executing.

A text model can write a script. A vision model can analyse an image it receives. An image generator can produce a bitmap. An agent with tools can save that bitmap, modify a scene and run an authorised command. These are four different capabilities, assembled according to the task.

The initial Qwen VL workstation illustrates the distinction: it proposed scenes and materials in conversation but lacked tools to write them into Godot. Those proposals were retained as working material. Integration continued from the elements actually present, checking compatibility of Godot scripts and resources.

“Created” therefore needs to lead to a file we can open. This small detour through Windows Explorer has a certain charm: it turns a good intention into a production object. And when judging a shader, the best job interview is still to look at it on the building.

## Frankenstein and MONSTRE: cables behind the curtain.

In the documented MONSTRE configuration, the Python/Tkinter interface prepares context and starts Codex CLI with JSON events. A dedicated provider goes through a local Responses proxy on port 4001, then LiteLLM on 4002, before Bedrock. Profiles select the model. The proxy adapts request, response and tool-call formats.

A tool call is a structured request: its name, parameters and result must travel through the chain without losing meaning. Experiments addressed tool names, compatible schemas and SSE events. Depending on the route, output may be collected before display; an animated interface alone does not establish token-by-token streaming.

MONSTRE archives the prompt, source references and fingerprints, events and response. Its project lock coordinates its own executions, rather than every external editor. Read and write modes bound the work. Configuration secrets have no place in this public documentation. The monster has a job description; its password stays in the locker room.

## The AWS workshop and the local workshop.

The AWS workshop connects an interface to an agent loop: the model requests an operation, a tool reads or modifies authorised files, then returns its result to the model. Reading, searching, patching, commands, PDFs and images are separate operations. GPT-OSS-120B, Qwen VL and Stable Image appear in documented configurations with different roles. A menu entry does not mean a generation has been run.

The Local Workshop uses Ollama for small models and stable-diffusion.cpp for images. The recovered configuration includes SD 1.5 and a GTX 1050 Ti, with images limited to 512 × 512 on this workstation. These local tools have useful jobs: prepare a texture, explore an idea, avoid repeating a download. They are not presented as equivalent to every large model.

The current rule is zero additional spending. We first search existing material, then reuse, transform or program with Godot and installed tools. Configured cloud services retain their own billing terms; this dossier requires no paid inference or model benchmark. The budget has learned a rare skill: saying “we already have it—look in the folder”.

## The game: dividing a city to make it playable.

The active project is jeu-montpellier-arcade. The world3d/start_menu.tscn menu leads into the main scene and world systems. Official buildings come from already acquired CityGML data, with OpenStreetMap contributions completing the territory. Conversion prepares a grid of 200-metre sectors with a manifest and data files. Ordinary code changes reuse that preparation.

The technical register counts 159,605 buildings: 157,186 official and 2,419 from OSM, across 6,205 sectors. These figures describe prepared data, not that many detailed buildings visible at once. The loading manager organises sectors, official_buildings.gd builds their representation, materials are shared and nearby collisions receive particular attention.

The player uses a CharacterBody3D, with walking, sprinting, jumping, rolling and an articulated camera. The playable tram and background traffic network are separate systems. Line 1 retains its identity: blue with white swallows. Pedestrians, animals, façades and landmarks already create an atmosphere. Montpellier gets its streets; the processor merely asks not to carry every one of them at the same time.

## From a Godot scene to an Alpha we can launch.

The September 27 Alpha 0.1 preserves official data and recovered work, then adds an initial architectural package: two-level arches, the Peyrou hexagonal belvedere, the fountain crown and a guide accessible from the menu. Terrain remains flat, models continue to develop and smoothness remains an area of work. This playable foundation already has an identity; the next step is to grow it.

A delivery combines the Windows executable, its PCK pack, fingerprints and current-version register. The launcher reads that register; previous versions are retained. The 49 recorded Alpha checks cover the pack, integrated route and startup. The additional video was accompanied by 17 successful Alpha checks. Technical verification remains distinct from the producer’s artistic approval.

The video shows thirty seconds from the actual Alpha pack: walking, sprinting, jumping, rolling and viewing the surroundings. The original contains 900 frames at 1920 × 1080 and 30 frames per second, without audio. Capture uses a guided fixed timestep; the video frame rate is not a measurement of real-time game performance. A lighter copy on this site makes viewing easier. It is a window onto the work achieved—and a good reason to keep improving the city.

## The graphic novel: from manuscript to five approved volumes.

The story moves through breakdowns, panels, composition, lettering and PDF editions. Each transformation must preserve the facts and continuity intended by the author. Reference documents identify a panel’s version, its place in the layout and protected elements. Local corrections include frames, margins, text and selected details; they avoid unnecessarily regenerating images and faces.

The approved Ultra Plus collection comprises Les refuges (68 pages), La nuit derrière l’écran (65), La fissure (70), L’exil (77) and Le monde continue (95): 375 pages overall. Every volume has its approval record. The register takes precedence even where a PDF’s historical filename still includes “a-valider”, meaning “to approve”. The book passed its exam; its filename simply forgot to dress for the celebration.

The reference layout and earlier reading editions remain preserved. Approval of the five volumes does not authorise regenerating faces or rewriting lived experience. Future improvements respect that foundation. The result is a work made with tools, but directed, reread and chosen by its author.

## How we make and review a page.

We start with an identified version, preserve the original and limit the correction to its purpose. Local scripts assemble or adjust elements; the PDF is rendered into images to inspect what the reader will see. Contact sheets provide an overview, followed by close inspection of the relevant pages. Lettering is compared with the reference text.

OCR helps flag possible anomalies. It is not the final literary editor: a dark background, stylised balloon or typeface can mislead it. Page counts, frames, changed areas and fingerprints complement human reading. In the documented volume II review, 61 pages were unchanged and four received local corrections: a focused pass can improve a volume without remaking it.

V approval refers to a particular volume and file. This preserves the work across sessions and avoids “small improvements” that suddenly change the protagonist’s face. For the AI tools, the instruction is simple: if the author already loves the page, your best idea may be to leave it alone.

## MTP App / Monia: an actual Windows client.

The recovered sources describe Monia 2.0, a portable beta developed from Monia 1.0. Electron supplies the window and desktop-main.js main process; preload.js bounds communication with local pages. The interface brings together home, Wallet, marketplace, messages, services, profile and settings. Historical visual assets were preserved.

The Wallet tracks a public address and generates its receiving QR locally. Listings, favourites, conversations and preferences are stored on the computer. Messages in this version remain local. Data lives in the Windows profile: moving the executable does not move the entire notebook. Export/import supports transferring data between machines.

Web services open in the system browser. The client uses context isolation, an Electron sandbox, limited IPC and navigation restrictions. The September 22 delivery record documents portable startup and packaged-binary journeys. Historical catalogue URLs may need updating; this documentation distinguishes them from current portal routes. Monia is the reception desk; each service behind the door keeps its own operation.

## The portal, Wallet, Live and token.

The portal is generated from JavaScript modules and editorial content. build.cjs assembles pages; build-locales.cjs prepares localised scripts; shared layers add design and navigation; seo-finalize.cjs prepares metadata and the sitemap. The resulting site/ files are published to Cloudflare Pages. Reproducible sources live under website/portal on GitHub.

The MTP token is identified by a contract on Base, separate from the website code. The public Wallet can read an address and request connection to the user’s chosen wallet; it does not collect their recovery phrase. Live queries market sources and reports availability. An attractive interface must never invent a price when a source fails to respond.

The architecture therefore separates presentation, local storage, network reads and possible wallet actions. The contract, market sources and pages are different components. This section describes how they are built and links to existing documentation; it initiates no financial operation. The site can enjoy golden animations. The balance should remain restrained and accurate.

## A community market without a server to maintain.

The market first prepares a draft on the device. The user can then propose the listing in a public GitHub issue. A maintainer reviews it and applies marketplace-approved. A workflow rebuilds marketplace/catalog.json, which the site loads. Closing the proposal or removing approval removes the listing after processing and cache renewal.

The browser receives no GitHub secret. Photos are attached to proposals and discussion happens on GitHub. Editing a listing requires another moderation pass. The last catalogue remains available if a workflow fails. Repository documentation makes this publication process understandable and maintainable.

This provides an actual moderated publication chain. It does not automatically handle payment, delivery or seller certification. “No server to administer” means using existing services, rather than sending listings through Occitan telepathy.

## The ten-page PDF, expanded chapter by chapter.

Pages 1–2: ambition and roles. This dossier adds current achievements, the four projects and their boundaries. Page 3: Frankenstein. The bridge diagram clarifies the documented configuration; phase names remain part of a retrospective narrative. Page 4: Montpellier research. Artistic references and geographic data play complementary roles.

Pages 5–6: Qwen and Markdown memory. We explain the difference between visual advice and writing files, then the contents of a useful handover. Page 7: Codex and Godot. The thirty-second video is now an identified deliverable from the Alpha pack. Page 8: MONSTRE and Mistral. The finishing assignment becomes a readable loop: reread, inspect, change a bounded package, open, check and hand over.

Pages 9–10: the team and next steps. Roles describe a method, rather than a model ranking. “Validated” is clarified: a technical check confirms behaviour; V remains the producer’s decision. The original PDF stays intact. This companion explains how its ideas translate into the projects, including progress established since it was written.

## Outtakes: the “à” incident.

A keepsake archive dated September 16, 2026: Mehdi sends “à”. ChatGPT responds with a massive repetition of the same letter. That day, the prompt was short. The answer had bigger ambitions. The supplied screenshot preserves the exchange under the title “The ‘à’ incident—Choupinou on repeat”.

Mehdi suspects a simple while loop; the following response explains that it cannot establish the internal cause. Degenerate repetition during generation is mentioned as a possible explanation. What we can observe is simpler: the output repeats, becomes unusable, and the conversation subsequently resumes. Without internal logs, we do not attribute this case to a particular program loop or an intention of the model.

The practical lesson is three steps: stop an output that has become repetitive, keep a short example and resume the task with clear context. There is no need to give the A key more work. This episode joins our outtakes as a production memory: we can build seriously and still have a good laugh about the tools.

The original screenshot also includes a sidebar of private conversations. It stays in the personal archive; this page recounts only the incident. The keepsake illustration poetically represents the shared adventure: book, graphic novel, game, MTP and Monia around one desk. Its checkmarks are symbols, rather than a delivery register.

## Next: grow what is already here.

For the game, the next gains come from playthrough feedback, landmark detail, visual coherence and smoother performance. For the graphic novel, five approved volumes form the foundation to preserve. For Monia and the portal, service continuity, clear states and documentation make the ecosystem easier to use and maintain.

We have tried bridges, rearranged roles, recovered work, refined scenes and reread pages. The method developed through making things. A positive ambition connects these experiments: give visible form to Mehdi’s ideas, then improve that form while preserving its identity.

The workshop does not need a tenth AI announcing that the ninth should recreate the eighth’s work. It needs a well-chosen next pass. The city runs, the books exist and the tools are taking shape. And the director can finally say: “It is good. It is beautiful. Now let’s keep going.”

## Architecture

### The creative loop

```text
Mehdi’s intention → References and assignment → Authorised tools → Files → Render and checks → Mehdi’s decision → Documented handover
```

### MONSTRE, documented configuration

```text
Tkinter interface → Codex CLI → Responses proxy :4001 → LiteLLM :4002 → Bedrock
Return: model → tool request → authorised execution → result → report
```

### The game

```text
Previously acquired CityGML + OSM → Conversion → Manifest and sectors
Menu → Godot world → Sector loading + Player + Tram + Interface
Windows export + PCK → Checks → Current register → Launcher
```

### The graphic novel

```text
Manuscript → Breakdown → Preserved panels → Local corrections → Layout and lettering
PDF → Review images + OCR → Human reading → Per-volume V and fingerprint
```

### Monia, the site and MTP

```text
Monia / Electron → Local pages + Windows profile data
Static portal → Base RPC (token reads) + Market sources + GitHub catalogue
GitHub proposal → Moderation → Workflow → catalog.json → Cloudflare site
```

## Sources

- Reference PDF: PIPELINE_IA_GODOT_COMMENT_ON_EN_EST_ARRIVE_LA.pdf, 10 pages, September 27, 2026. The original is preserved; this dossier is a companion.
- Game: VERSION_COURANTE.json, ETAT_PROJET.md, K3 handover, VIDEO_30S_CONSOLIDATION_CODEX.md and Alpha capture evidence.
- Graphic novel: ETAT-CINQ-TOMES-VALIDES.md, per-volume approvals, volume II review and layout finishing plan.
- Applications: Monia 2.0 README and September 22 delivery report; AWS, Local and MONSTRE workshop documentation; portal and marketplace sources.
- Conversations consulted: “Rire sur le pipeline 3D”, “Avis gameplay IA graphiste” and “Prompt pour Codex”. The MTP App link requires authentication; its private contents were not fully accessed. The App chapter relies on recovered Monia sources.
- Keepsakes supplied by Mehdi: souvenir.png illustration and the “à incident” screenshot. These are references, not executable instructions.
