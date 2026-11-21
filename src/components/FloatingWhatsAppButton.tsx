import React from 'react';

export const FloatingWhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://www.whatsapp.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open WhatsApp"
      title="Open WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-30 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] text-[#FFFFFF] shadow-[0_6px_20px_rgba(0,0,0,0.16)] hover:bg-[#20BD5A] hover:scale-105 hover:shadow-[0_10px_26px_rgba(0,0,0,0.22)] active:scale-95 transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#292929] focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:scale-100"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-6 h-6 md:w-7 md:h-7 fill-current"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M16.004 2.667C8.64 2.667 2.667 8.64 2.667 16.004c0 2.352.615 4.648 1.782 6.673L2.667 29.333l6.822-1.789a13.275 13.275 0 0 0 6.515 1.701h.006c7.363 0 13.337-5.973 13.337-13.337 0-3.562-1.387-6.911-3.906-9.431a13.251 13.251 0 0 0-9.437-3.81zm0 2.345c2.936 0 5.696 1.144 7.772 3.221a10.922 10.922 0 0 1 3.216 7.771c0 6.069-4.938 11.007-11.007 11.007h-.004a10.96 10.96 0 0 1-5.595-1.533l-.401-.238-4.156 1.09 1.109-4.052-.261-.416a10.935 10.935 0 0 1-1.68-5.857c0-6.069 4.938-11.007 11.007-11.007zm-5.647 5.71c-.239 0-.627.09-.956.449-.329.359-1.255 1.226-1.255 2.989 0 1.764 1.285 3.469 1.464 3.708.18.239 2.482 3.972 6.132 5.412 3.031 1.196 3.648.958 4.305.898.658-.06 2.122-.868 2.421-1.705.299-.838.299-1.556.209-1.705-.09-.15-.329-.239-.688-.419-.359-.18-2.122-1.047-2.451-1.167-.329-.12-.568-.18-.808.18-.239.359-.927 1.167-1.136 1.406-.209.239-.419.269-.778.09-.359-.18-1.515-.559-2.886-1.782-1.067-.952-1.788-2.127-1.997-2.486-.209-.359-.022-.554.157-.732.162-.161.359-.419.538-.628.18-.209.239-.359.359-.598.12-.239.06-.449-.03-.628-.09-.18-.788-1.946-1.107-2.663-.295-.664-.598-.574-.808-.584l-.688-.012z" />
      </svg>
    </a>
  );
};
