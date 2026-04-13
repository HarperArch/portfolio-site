---
title: "Buyer Beware: AI-Driven Web Scraper Pipeline"
shortDescription: "Async Python scraping pipeline (Redis, Docker) for Buyer Beware’s AI threat-detection stack. The overall Buyer Beware system earned Best Computer Science Senior Design Project at UCF (Fall 2025)."
date: 2025-10-01
dateRange: "Spring 2025 – Fall 2025"
role: "Full-stack / Systems Developer (Team Project)"
tags:
  - Python
  - AsyncIO
  - Web Scraping
  - Redis
  - Docker
  - NLP
  - UCF Senior Design
featured: true
order: 1
links:
  github: "https://github.com/HarperArch/BuyerBewareWebScraper"
  report: "/reports/SDFinalDesignDocument.pdf"
  recommendation: "/reports/HarperArchambault_LetterofRecommendation.pdf"
---

**Recognition:** The full Buyer Beware system—including this scraper as one component—was named **Best Computer Science Senior Design Project** at the University of Central Florida (Fall 2025).

## Problem

Detecting suspicious online behavior related to illicit activities requires large-scale, high-quality textual datasets. However, collecting this data is challenging due to dynamic web content, inconsistent formats, and the need for scalable, efficient processing pipelines.

## Approach

Developed an asynchronous web scraping pipeline using Python and asyncio to efficiently collect data from multiple online sources. Implemented high-performance HTML parsing with Selectolax and BeautifulSoup, followed by a data cleaning and normalization pipeline to standardize extracted text.
Integrated a Redis-based queue system to enable scalable task distribution and improve throughput. Designed deduplication mechanisms using rolling hashes to eliminate redundant content and ensure dataset quality. The system was containerized using Docker for portability and reproducibility.

## Outcome

The broader Buyer Beware effort was recognized as **UCF’s Best Computer Science Senior Design Project (Fall 2025)**—this pipeline was a core part of that work.

On the technical side, the team delivered a scalable data collection path that produced structured datasets for downstream AI training, improved data quality and throughput via Redis-backed queues and deduplication, and supported research in AI-driven network monitoring and threat detection.
