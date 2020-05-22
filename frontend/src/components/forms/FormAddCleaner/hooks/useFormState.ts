import { useState } from 'react';
import { Service, Gallery } from '../types';

export default () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const [services, setServices] = useState<Service[]>([]);

  return {
    name,
    setName,
    description,
    setDescription,
    gallery,
    setGallery,
    services,
    setServices
  };
}
