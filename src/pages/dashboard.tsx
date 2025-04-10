import Head from 'next/head';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>My Contribution Dashboard – MARTHOS</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold mb-6">📈 My Contributions</h1>
        <p className="mb-4">Track your contribution history, prediction results, and NFT rewards.</p>

        <div className="border p-4 rounded bg-gray-50">
          <p><strong>Last Uploaded File:</strong> data_sample.csv</p>
          <p><strong>AI Prediction Score:</strong> 0.87</p>
          <p><strong>NFT Status:</strong> Minted ✅</p>
        </div>

        <div className="mt-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">View on Blockchain</button>
        </div>
      </main>
    </div>
  );
}
