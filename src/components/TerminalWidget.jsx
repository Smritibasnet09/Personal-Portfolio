import React, { useState } from 'react';
import { Terminal, Copy, Check, Play, Sparkles } from 'lucide-react';

const TABS = [
  { id: 'status', label: 'status.sh' },
  { id: 'model', label: 'ai_pipeline.py' },
  { id: 'stack', label: 'environment.env' },
];

export default function TerminalWidget() {
  const [activeTab, setActiveTab] = useState('status');
  const [copied, setCopied] = useState(false);

  const getContent = () => {
    switch (activeTab) {
      case 'status':
        return `#!/bin/bash
# Smriti Basnet — Runtime Environment v2.6
echo "Fetching engineer telemetry..."

> DEVELOPER:      Smriti Basnet
> SPECIALIZATION: Computer Science & Artificial Intelligence
> INSTITUTION:    Sunway College Kathmandu (BCU UK)
> STATUS:         ● Open for AI Engineering & Full-Stack Roles
> HIGHLIGHT:      🏆 Grand Winner — TechSprint 2026 National Hackathon
> ACTIVE_FOCUS:   LLM Agents, RAG Pipelines, Automated MLOps
> LOCATION:       Kathmandu, Nepal (Open to Remote / Global)`;
      case 'model':
        return `from fastapi import FastAPI, HTTPException
from transformers import AutoModelForSequenceClassification, AutoTokenizer
import torch

app = FastAPI(title="Smriti_AI_Inference_Service", version="2.0")

@app.post("/api/v1/predict-fraud")
async def evaluate_transaction(payload: TransactionEvent):
    """Real-time inference with data drift telemetry"""
    features = preprocess_tensor(payload)
    drift_score = monitor.calculate_drift(features)
    
    if drift_score > 0.15:
        airflow.trigger_retraining_dag()
        
    prediction = model(features)
    return {
        "status": "APPROVED" if prediction.prob < 0.5 else "FLAGGED",
        "confidence": float(prediction.prob),
        "latency_ms": 14.2
    }`;
      case 'stack':
        return `# Core Engineering Stack
PYTHON_VERSION="3.11.x"
FRAMEWORKS="FastAPI, Django, Django REST, React, Next.js"
ML_LIBRARIES="PyTorch, TensorFlow, Scikit-learn, HuggingFace"
DATABASES="PostgreSQL, Redis, SQLite, MariaDB"
MLOPS_DEVOPS="Docker, Apache Airflow, MLflow, Evidently AI, Git"
VECTOR_STORES="Pinecone, ChromaDB, FAISS"
LLM_INTEGRATION="Google Gemini API, OpenAI GPT, LangChain"
TESTING_TOOLS="PyTest, Postman, Locust Benchmarking"`;
      default:
        return '';
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="terminal-widget-container">
      {/* Top Title Bar */}
      <div className="terminal-title-bar">
        <div className="terminal-window-buttons">
          <span className="window-dot dot-red" />
          <span className="window-dot dot-yellow" />
          <span className="window-dot dot-green" />
        </div>

        {/* Tab Buttons */}
        <div className="terminal-tabs-row">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`terminal-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <Terminal size={12} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="terminal-copy-action"
          title="Copy snippet"
          aria-label="Copy snippet"
        >
          {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Display Area */}
      <pre className="terminal-code-body">
        <code>{getContent()}</code>
      </pre>

      {/* Terminal Footer Indicator */}
      <div className="terminal-status-footer">
        <span className="terminal-ready-pulse" />
        <span className="terminal-ready-text">Neural Session Active • All Systems Operational</span>
      </div>
    </div>
  );
}
