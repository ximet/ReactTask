import { Suspense } from 'react';

const PublicLayout = ({ children }) => (
  <Suspense fallback={null}>{children}</Suspense>
);

export default PublicLayout;
