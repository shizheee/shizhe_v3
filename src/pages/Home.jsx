import React from 'react';
import Card from '../components/Card';
import CardContent from '../components/CardContent';
import Button from '../components/Button';

export default function Home() {
  return (
    <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardContent>
            <h2 className="text-xl font-semibold text-blue-700">Feature {i}</h2>
            <p className="text-sm text-gray-600">
              Discover exciting feature {i}. Enhance your workflow and user experience.
            </p>
            <Button>Explore</Button>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
