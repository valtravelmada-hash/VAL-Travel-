import React from 'react';

export interface Destination {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  imagePrompt?: string;
  price?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  imageUrl?: string;
  imagePrompt?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export enum BotStatus {
  IDLE = 'IDLE',
  THINKING = 'THINKING',
  ERROR = 'ERROR',
}