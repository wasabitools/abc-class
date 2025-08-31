import AlphabetPreview from '@/components/AlphabetPreview';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-pink-100 p-4">
      <h1 className="text-4xl font-bold text-center text-purple-600 mb-8 font-comic">
        Click on a letter to hear its sound!
      </h1>
      <AlphabetPreview />
    </main>
  );
}