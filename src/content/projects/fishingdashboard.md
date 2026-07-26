---
title: "Reel-ality Check"
shortDescription: "Installable Florida fishing PWA that turns live tide, weather, and solunar data into a scored go/no-go verdict—plus AI chat, photo fish ID, and account-backed spots and catch logs."
date: 2026-07-20
dateRange: "July 2026 – Present"
role: "Solo Personal Project"
tags:
  - TypeScript
  - React
  - Vite
  - PWA
  - Vercel
  - PostgreSQL
  - Claude API
  - NOAA
featured: true
order: 4
links:
  github: "https://github.com/HarperArch/fishing-dashboard"
  demo: "https://fishing-dashboard-lilac.vercel.app"
---

## Problem

Saltwater anglers juggle many signals before a trip—tides, wind, pressure, moon phase, species seasons, and state regulations—across scattered apps and websites. That makes it hard to answer a simple daily question: *should I go fishing right now, and where?* Existing tools rarely combine live conditions into one actionable score, keep personal spots and catch history in sync across devices, or help with regulations and species ID in the same place.

## Approach

Built an installable Progressive Web App (Vite, React, TypeScript, Tailwind) focused on Florida saltwater and intercoastal fishing. The dashboard pulls free live data from NOAA Tides & Currents, Open-Meteo, and NWS alerts, then computes moon/solunar windows client-side and scores conditions into a 0–100 “should I go” verdict with an hour-by-hour bite timeline.

Shipped supporting product surfaces around that core: saved spots on a Leaflet map (with nearby NOAA buoys), a catch log with AI photo species identification (Fishial), gear checklists, a searchable FWC saltwater regulations browser, and a Claude-powered fishing chatbot that forces live lookups against official Florida sources for regulation questions. Accounts use Clerk; spots, catches, and gear lists persist in Neon Postgres via authenticated Vercel serverless functions, with catch photos stored in Vercel Blob.

## Outcome

Delivered a production-deployed PWA ([live demo](https://fishing-dashboard-lilac.vercel.app)) that unifies conditions scoring, personal fishing data, regulations, and AI assistance in one mobile-installable app. The project demonstrates end-to-end product engineering: real-time third-party data integration, a transparent scoring model, authenticated APIs, serverless Postgres/Blob storage, and practical LLM features with source-backed answers for safety-sensitive regulations questions.
