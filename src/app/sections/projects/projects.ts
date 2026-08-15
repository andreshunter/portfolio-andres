import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Asistente Inteligente con IA',
      category: 'IA Generativa',
      description: 'Chatbot interno entrenado con documentos de la empresa para responder preguntas y generar insights.',
      technologies: ['Python', 'LangChain', 'OpenAI', 'Streamlit'],
      visual: 'visual-ai'
    },
    {
      title: 'Predicción de Demanda',
      category: 'Machine Learning',
      description: 'Modelo de ML que predice la demanda de productos con una precisión cercana al 92%.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Plotly'],
      visual: 'visual-ml'
    },
    {
      title: 'Análisis de Sentimiento',
      category: 'NLP',
      description: 'Análisis de opiniones de clientes usando NLP para detectar sentimientos y temas clave.',
      technologies: ['Python', 'NLTK', 'Transformers', 'Power BI'],
      visual: 'visual-nlp'
    },
    {
      title: 'Detección de Anomalías',
      category: 'Visión por Computadora',
      description: 'Modelo de deep learning para detectar anomalías en imágenes médicas.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Keras'],
      visual: 'visual-cv'
    }
  ];

  currentSlide = 0;

  get visibleCount() {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 3;
  }

  get maxSlide() {
    return Math.max(0, this.projects.length - this.visibleCount);
  }

  get slidePositions() {
    return Array.from({ length: this.maxSlide + 1 }, (_, index) => index);
  }

  next() {
    this.currentSlide = this.currentSlide >= this.maxSlide ? 0 : this.currentSlide + 1;
  }

  previous() {
    this.currentSlide = this.currentSlide <= 0 ? this.maxSlide : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = Math.min(index, this.maxSlide);
  }

  @HostListener('window:resize')
  onResize() {
    if (this.currentSlide > this.maxSlide) {
      this.currentSlide = this.maxSlide;
    }
  }

  trackProject(index: number) {
    return index;
  }
}
