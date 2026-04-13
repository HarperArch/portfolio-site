---
title: "Tomasulo Algorithm Optimization and Performance Modeling"
shortDescription: "Enhanced Tomasulo-based simulator using queueing theory and constrained optimization to reduce instruction latency."
date: 2025-02-01
dateRange: "Spring 2025"
role: "Independent Research Project"
tags:
  - Python
  - Computer Architecture
  - Performance Modeling
  - Optimization
  - Queueing Theory
featured: true
order: 3
links:
  github: "https://github.com/yourusername/tomasulo-optimization"
  demo: ""
  report: ""
---

## Problem

While Tomasulo’s algorithm enables out-of-order execution and improves instruction-level parallelism, its performance is highly dependent on hardware resource allocation (e.g., functional units, reservation stations). Traditional implementations do not systematically optimize these resources under real-world constraints such as cost or limited hardware budgets.

## Approach

Developed an enhanced dynamic instruction scheduling simulator in Python based on Tomasulo’s algorithm, incorporating performance modeling techniques from queueing theory. Modeled functional units as M/D/1 queues to approximate execution latency and resource contention within the pipeline.
Formulated the resource allocation problem as a constrained optimization task and applied Sequential Least Squares Programming (SLSQP) to minimize average instruction latency under fixed cost budgets. Implemented dynamic service-rate adaptation using exponential moving average (EMA) feedback to adjust execution parameters in response to workload behavior.

## OutcomeTomasuloCostAllocation.ipynb

Achieved a 9–34% reduction in average instruction latency across multiple workload profiles through optimized resource allocation and adaptive scheduling. The project demonstrated how combining classical computer architecture techniques with mathematical optimization can significantly improve processor performance.
This work provided deeper insight into the interaction between hardware resources, scheduling policies, and system-level performance, bridging concepts from computer architecture, optimization, and systems modeling.
