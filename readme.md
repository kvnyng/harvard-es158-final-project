# Language-Guided Whole-Body Humanoid Control via Conditional Trajectory Diffusion

**Harvard ES158 Final Project**  
**Author:** Kevin H. Yang  
**December 2025**

## Overview

This project develops a language-conditioned whole-body control framework for humanoid robots that maps natural language commands to dynamically stable, full-body control trajectories. By pretraining a trajectory diffusion model on large-scale motion datasets and fine-tuning on high-quality humanoid data, the system learns versatile, text-controllable motion generation.

The resulting controller enables general-purpose, physically grounded humanoid behaviors from textual prompts such as "turn left" or "reach forward," bridging natural language understanding with optimal control and reinforcement learning for expressive humanoid motion generation.

## Project Structure

```
.
├── main.tex                      # Main LaTeX document (research paper)
├── preamble_packages.tex         # LaTeX package imports
├── preamble_symbols.tex         # Common math symbols and operators
├── shortcuts.tex                # Project-specific LaTeX macros
├── refs.bib                     # BibTeX bibliography database
├── figure/                      # Figures and images
│   ├── g1_deploy_*.png          # Humanoid deployment sequences
│   ├── motion-x++.png           # Motion-X++ dataset examples
│   └── SEASLogo.pdf             # Harvard SEAS logo
├── presentation/                # Interactive presentation
│   ├── presentation.html        # Reveal.js presentation
│   ├── script.js                # Presentation logic
│   ├── styles.css               # Custom styling
│   ├── video-config.js          # Video asset configuration
│   ├── assets/                  # Presentation assets
│   │   ├── beyondmimic_framework.png
│   │   ├── *.mov                # Demonstration videos
│   │   └── motion-x++.png
│   ├── package.json             # Node.js dependencies
│   ├── DEPLOYMENT.md            # GitHub Pages deployment guide
│   └── SETUP_RELEASE.md         # Release setup instructions
└── .gitignore                   # Git ignore rules
```

## Research Contributions

### Problem Formulation
- Formulates humanoid control as a partially observable Markov decision process (POMDP)
- Integrates language embeddings as conditioning variables for policy generation
- Explores diffusion-based trajectory optimization for stochastic optimal control

### Methodology
1. **Pretraining:** Unconditional diffusion model over humanoid motion trajectories
2. **Conditioning:** Text-conditioned diffusion using cross-attention or FiLM layers
3. **Control Integration:** Deployment of generated trajectories via PD controllers

### Datasets
- **AMASS:** Motion dataset with natural language annotations
- **LAFAN1:** Retargeted for Unitree G1 humanoid
- **Motion-X++:** Large-scale multimodal 3D human motion dataset with semantic text annotations

### Infrastructure
- **Simulation:** MJLab (MuJoCo + RSL) for humanoid dynamics
- **Training:** PyTorch for model development
- **Language Processing:** HuggingFace tokenizers for text embeddings
- **Framework:** BeyondMimic for motion tracking and policy learning

## Getting Started

### Prerequisites
- LaTeX distribution (for compiling the paper)
- Node.js and npm (for running the presentation locally)
- Python environment with PyTorch (for model training, if reproducing experiments)

### Compiling the Paper

**Online (Overleaf):**
1. Upload the repository to Overleaf
2. Set `main.tex` as the root document
3. Compile using the Overleaf interface

**Local:**
```bash
# Using latexmk (recommended)
latexmk -pdf main.tex

# Or manual compilation
pdflatex main.tex
bibtex main
pdflatex main.tex
pdflatex main.tex
```

### Running the Presentation

The presentation is built with Reveal.js and can be viewed locally:

```bash
cd presentation
npm install
npm run dev
```

This will start a local server at `http://localhost:8080` with auto-reload enabled.

### Deploying the Presentation

See `presentation/DEPLOYMENT.md` for detailed instructions on deploying to GitHub Pages. Note that video assets may need to be hosted externally due to GitHub's file size limits.

## Key Results

- Successfully established a working humanoid control and training pipeline based on the BeyondMimic framework
- Reproduced motion tracking controllers and validated the training infrastructure
- Curated motion data from Motion-X++ with semantic annotations for language-motion alignment
- Achieved ~70% prompt compliance across sampled trajectories in preliminary experiments
- Demonstrated successful motion tracking for short-horizon actions (stepping, reaching)

## Evaluation Metrics

- **Task success rate:** Prompt compliance and semantic alignment
- **Motion realism:** FID scores in latent space
- **Trajectory quality:** Smoothness and stability metrics
- **Language-motion alignment:** CLIP similarity and human evaluation

## Baselines

- BeyondMimic RL (task-specific policy)
- ExBody2 imitation controller
- Diffusion model without language conditioning

## Course Relevance

This project directly aligns with Harvard ES158 (Optimal Control and Reinforcement Learning) by:

- Exploring sequential decision-making in high-dimensional, dynamic systems
- Integrating imitation learning with reinforcement learning for policy optimization
- Applying diffusion-based trajectory optimization analogous to stochastic optimal control
- Evaluating policies under cumulative reward including task success, smoothness, and energy efficiency

## References

All citations are managed in `refs.bib` using BibTeX. The paper uses the `abbrvnat` bibliography style.

## License

This project is part of academic coursework. Please refer to Harvard University's academic policies regarding use and distribution.

## Acknowledgments

- BeyondMimic framework for motion tracking infrastructure
- Motion-X++ dataset for multimodal motion data
- Harvard SEAS for computational resources

---

For questions or issues, please refer to the paper (`main.tex`) or presentation materials in the `presentation/` directory.
