import Head from 'next/head';

export default function Donate() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Contribute Data – MARTHOS</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-4">📤 Data Contribution</h1>
        <p className="mb-6">Upload your data to contribute to our AI ground subsidence prediction system.</p>

        <form className="space-y-4">
          <div>
            <label className="block font-medium">Data Description</label>
            <textarea className="w-full border p-2" rows={3} placeholder="Briefly describe the data you're contributing..." />
          </div>
          <div>
            <label className="block font-medium">Upload File</label>
            <input type="file" className="w-full" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit Contribution
          </button>
        </form>
      </main>
    </div>
  );
}
