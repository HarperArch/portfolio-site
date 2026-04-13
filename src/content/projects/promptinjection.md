---
title: "Prompt Injection Evaluation Framework"
shortDescription: "Automated framework for evaluating LLM vulnerability to prompt injection and jailbreak attacks across models and defenses."
date: 2026-04-01
dateRange: "Spring 2026"
role: "Independent Project"
tags:
  - Python
  - LLM Security
  - NLP
  - Evaluation
  - OpenAI API
  - Anthropic API
featured: true
order: 2
links:
  github: "https://github.com/HarperArch/prompt-injection-evaluation"
  demo: ""
  report: "/reports/Spring2026CAP6640FinalReport2.pdf"
---

## Problem

Large language models are vulnerable to prompt injection and jailbreak attacks that can override system instructions and produce unsafe or unintended outputs. However, there is a lack of standardized frameworks for systematically evaluating model robustness across different attack types and defense strategies.

## Approach

Developed an automated evaluation framework to systematically assess prompt injection attacks across multiple models and configurations. Constructed a structured dataset of attack prompts categorized into instruction override, jailbreak chaining, and role misdirection scenarios.
Integrated APIs from OpenAI and Anthropic to evaluate proprietary models under both baseline and hardened system prompt conditions. Extended the framework to include an open-weight LLaMA-based model, enabling direct comparison between proprietary and open-source systems.
Implemented a logging and analysis pipeline to store model responses, automatically label attack success using a secondary evaluation model, and compute metrics such as Attack Success Rate (ASR). Built analysis scripts to aggregate results across models, conditions, and attack categories for systematic comparison.

## Outcome

Developed a reproducible pipeline for benchmarking LLM robustness against prompt injection attacks. Results showed clear differences in vulnerability across model types: proprietary models demonstrated strong resistance under hardened conditions, while the open-weight model exhibited significantly higher susceptibility, particularly in instruction override scenarios.
This project highlights key gaps in current alignment techniques and provides a structured methodology for evaluating and improving LLM security in real-world deployments.
