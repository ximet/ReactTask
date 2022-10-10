import React from 'react';
import image404 from '../UI/images/404.png';
import Image from '../UI/images/image';

function NotFoundPage() {
  return (
    <div>
      <Image image={image404} alt="404 Page not found" />
    </div>
  );
}

export default NotFoundPage;
