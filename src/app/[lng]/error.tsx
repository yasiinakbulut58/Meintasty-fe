'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section-b-space bg-inner success-section">
      <div className="container">
        <div className="row success-detail mt-5">
          <div className="col p-5">
            <h2>Something went wrong!</h2>
            <p>
              we are sorry but the page you are looking for doesn't exist or has
              been removed. please check back later or search again.
            </p>
            <button onClick={() => reset()} className="btn btn-solid color1">
              Try again
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
