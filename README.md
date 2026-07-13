# IGCSE Zero→Hero 📚

A complete self-study course for **Cambridge IGCSE Additional Mathematics (0606)** and **Cambridge IGCSE Physics (0625)** — built from zero, following the official syllabus order.

## Features
- **27 chapters** (15 Add Math + 12 Physics) with step-by-step explanations, formulas, diagrams and worked examples
- **135 quiz questions**, each with the answer, full solution, and the reasoning behind it
- 🚩 **Flag system** — manually flag any question you want to review later; it collects in the Flagged tab
- 🔖 **Bookmark / resume** — save exactly where you stopped, plus auto "continue where you left off"
- ✓ **Progress tracking** — mark chapters complete, see % progress per subject
- 📺 **YouTube links** per chapter for video reinforcement
- Works entirely offline once loaded — no backend, everything saved in your browser (localStorage)

## Deploy to GitHub Pages
1. Create a new repo on GitHub (e.g. `igcse-course`)
2. Upload these files: `index.html`, `data-addmath.js`, `data-physics.js`, `README.md`
   ```bash
   git init
   git add .
   git commit -m "IGCSE Zero→Hero course"
   git branch -M main
   git remote add origin https://github.com/gibbiechu/igcse-course.git
   git push -u origin main
   ```
3. Repo → **Settings → Pages → Source: Deploy from branch → main / (root)** → Save
4. Your course will be live at `https://gibbiechu.github.io/igcse-course/`

## How to study with it
1. Go in chapter order — later chapters build on earlier ones
2. Attempt every quiz question **on paper before** opening the solution
3. Flag any question you want to revisit — the flag is a personal "save for later" marker, nothing more
4. Review the 🚩 Flagged tab whenever you have time; unflag when done
5. Pair each chapter with a past paper topic set once you finish it

## Note on progress data
Flags, bookmarks and completion are stored in your browser's localStorage — clearing browser data or switching devices resets them.
