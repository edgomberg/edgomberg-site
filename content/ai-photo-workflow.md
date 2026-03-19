# AI Photo Workflow for edgomberg.com

## TL;DR Recommendation

**Train a Flux LoRA on your own photos.** This is the 2026 gold standard for founder portraits that look real — not corporate, not AI-smooth. Cost: ~$2-5 total. Time: 3-4 hours end-to-end.

---

## Why Flux LoRA (Not Midjourney, Not DALL-E)

| Model | Best For | Portrait Quality | Control |
|-------|---------|-----------------|---------|
| **Flux (with LoRA)** | Photorealistic personal portraits | Best in class — skin texture, eye reflections, hair detail | Full — train on YOUR face |
| Midjourney v6+ | Stylized/editorial imagery | Gorgeous but "magazine" feel | Prompt only — can't train on your face |
| DALL-E 3/4 | Quick concepts, illustrations | Good but detectable | Prompt only |
| Imagen 4 | General photorealism | Strong | Limited access |

**The key insight:** Midjourney and DALL-E can't learn YOUR face. They generate generic "entrepreneur guy." Flux LoRA trains on 10-20 of your actual photos and generates new images that are YOU — in any setting, any lighting, any outfit.

---

## The Workflow (Step by Step)

### Step 1: Gather Training Photos

You need **10-20 clear photos** of yourself. Rules:

- **Variety matters:** Different angles, expressions, lighting conditions
- **Recent photos only:** Same timeframe, consistent hairstyle/facial hair
- **No sunglasses or hats** — the model will generate them in every output
- **No group shots** — solo only
- **No heavy filters** — clean, well-lit images
- **Mix of indoor/outdoor** — helps the model generalize

For Ed specifically: casual-professional vibe. Think coffee shop, rooftop, urban street. Not boardroom. Not suit-and-tie.

### Step 2: Train the LoRA

Two platforms, both excellent:

**Option A: Replicate (Recommended for simplicity)**
- URL: https://replicate.com/collections/flux-fine-tunes
- Upload photos, set trigger word (e.g., "EDGOMBERG")
- Training: ~20-30 minutes, costs under $2
- Output: warm runnable model + downloadable LoRA weights

**Option B: fal.ai (Recommended for speed)**
- URL: https://fal.ai/models/fal-ai/flux-lora-fast-training
- Same process, ~$2 per run
- Slightly faster training, similar quality

**Training settings:**
- Resolution: 1024x1024
- Steps: 800-1200 (more steps = more accurate but slower)
- Learning rate: default works fine for portraits

### Step 3: Generate Founder Portraits

Once trained, use these prompts. Replace `EDGOMBERG` with your trigger word.

---

## Prompt Templates

### The "About Page" Hero Shot
```
A photograph of EDGOMBERG, 30-year-old man, sitting in a modern cafe with warm natural light streaming through large windows. He's wearing a fitted dark henley shirt, relaxed and confident expression, slight smile. Shot on 85mm f/1.4 lens, shallow depth of field, warm golden hour tones. Ultra-detailed skin texture, natural imperfections. Editorial photography style.
```

### The "Casual Founder" Shot
```
A candid photograph of EDGOMBERG, young entrepreneur, standing on a city rooftop at golden hour. Wearing an olive field jacket over a simple white t-shirt. Wind slightly catching his hair. Looking off-camera with a thoughtful expression. Shot on 50mm lens, natural light, warm tones. Photojournalistic style, not posed. Realistic skin texture, no retouching.
```

### The "Working Builder" Shot
```
A photograph of EDGOMBERG sitting at a minimal desk with a laptop, natural side lighting from a window. Wearing a navy crewneck sweater. Focused expression, mid-thought. Coffee cup nearby. Shot on 35mm lens, documentary style. Soft shadows, warm ambient light. Ultra-realistic, no AI smoothing.
```

### The "Street Portrait"
```
Street portrait of EDGOMBERG walking through a European city street. Casual outfit — dark jeans, rust-colored jacket. Natural expression, mid-stride. Shallow depth of field, background slightly blurred. Shot on 85mm f/1.8, overcast natural light. Film grain, authentic look. No retouching, realistic skin.
```

### The "Profile Pic" (Square, Clean)
```
Close-up portrait of EDGOMBERG against a simple dark background. Wearing a black crew neck t-shirt. Direct eye contact, slight confident smile. Soft studio lighting, one key light from the left. Shot on 100mm macro lens. Ultra-detailed skin texture with natural pores and imperfections. No heavy retouching. Clean, minimal, editorial.
```

---

## Pro Tips for Authentic Results

### What makes AI portraits look fake:
1. **Too-perfect skin** — no pores, no texture variation
2. **Symmetrical everything** — real faces aren't symmetric
3. **Dead eyes** — the "uncanny valley" stare
4. **Generic backgrounds** — blurred nothingness
5. **Clothing with no wrinkles** — fabric should fold naturally

### How to fix it:
- Always include "realistic skin texture, natural imperfections" in prompts
- Specify a real camera and lens (85mm f/1.4, 50mm f/1.8, etc.)
- Use "documentary style" or "photojournalistic" — not "professional headshot"
- Add subtle environmental details (coffee cup, laptop, city in background)
- Avoid words like "perfect," "flawless," "beautiful" — they trigger AI smoothing
- After generation: light post-processing in Photoshop/Lightroom to add film grain, subtle color grading, micro-imperfections

### The "intentional degradation" trick:
The best AI portraits in 2026 are ones where you deliberately add back organic imperfections after generation — subtle skin texture variations, asymmetric lighting, slight motion in hair. Adobe Photoshop's Camera Raw filter with added grain and vignetting sells the realism.

---

## Budget Breakdown

| Item | Cost |
|------|------|
| LoRA training (Replicate or fal.ai) | ~$2 |
| 50 generated images at 3-5 cents each | ~$2.50 |
| Re-training if needed | ~$2 |
| **Total** | **~$5-7** |

Compare: Professional photographer in SF = $300-800 per session.

---

## Alternative: No-Code AI Headshot Services

If you don't want to run the LoRA workflow yourself:

1. **Aragon AI** — consistently rated most realistic, ~$30-50
2. **HeadshotPro** — good for team consistency, ~$29
3. **Profile Bakery** — Stable Diffusion + GAN powered, ~$25-40

These are "upload selfies, get headshots" services. Less control than LoRA, but zero technical setup. Results are corporate-leaning — fine for LinkedIn, less ideal for a personal brand site.

---

## Ed-Specific Recommendations

Given the vibe (30, entrepreneur, casual-professional, adventure-nomad aesthetic):

1. **Train LoRA on Replicate** with 15-20 recent photos
2. **Generate 3-4 hero shots** using the prompts above — pick the one that feels most like a real photo someone took of you
3. **Post-process lightly** — add film grain, warm color grade, slight desaturation
4. **Avoid:** suit-and-tie corporate headshots, overly styled studio lighting, any pose that screams "I paid for this photo"
5. **The test:** Would this look out of place on your Instagram story? If yes, it's too polished.

---

## Sources

- [FLUX AI Headshot Generator vs. Other Models 2026](https://vertu.com/ai-tools/flux-ai-headshot-generator-vs-other-models-for-realistic-portraits-2026/)
- [Mastering FLUX.1 Prompts for Realistic Portraits](https://www.nextdiffusion.ai/blogs/mastering-ai-portrait-prompts-with-flux1-for-realistic-images)
- [How to Train a Flux LoRA for Headshots](https://www.basedlabs.ai/articles/how-to-train-a-flux-lora---ideal-for-realistic-headshots)
- [Fine-tune FLUX.1 with Your Images — Replicate](https://replicate.com/blog/fine-tune-flux)
- [Train FLUX LoRA Fast — fal.ai](https://fal.ai/models/fal-ai/flux-lora-fast-training)
- [Training a Personal LoRA on Replicate](https://www.pelayoarbues.com/notes/Training-a-Personal-LoRA-on-Replicate-Using-FLUX.1-dev)
- [Get Accurate AI Headshots: How to Create Your Flux LoRA — Social Media Examiner](https://www.socialmediaexaminer.com/get-accurate-ai-headshots-how-to-create-your-flux-lora/)
- [FLUX 2 Pro LoRA Training: Character Consistency Guide 2026](https://apatero.com/blog/flux-2-pro-lora-training-character-consistency-2026/)
- [Complete Guide to AI Image Generation 2026](https://medium.com/@cliprise/ai-image-generation-in-2026-midjourney-flux-2-imagen-4-and-beyond-7934a9228e98)
- [50 Advanced AI Image Prompts That Work in 2026](https://blog.republiclabs.ai/2026/03/50-advanced-ai-image-prompts-that.html)
