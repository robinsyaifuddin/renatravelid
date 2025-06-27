import React from 'react';
import { Star, MapPin, Calendar, Users, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { tourData } from '@/data/tourData';
const TourGrid = () => {
  // Get specific destinations: TWA Pepandayan, Pulau Pecang, Wisuba Baduy
  const specificDestinations = ['twa-papandayan', 'pulau-pecang', 'wisata-baduy'];
  const topDestinations = specificDestinations.map(id => ({
    id,
    ...tourData[id as keyof typeof tourData]
  })).filter(tour => tour.title); // Filter out any undefined tours

  return;
};
export default TourGrid;