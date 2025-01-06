function SocialMedia() {
  return (
    <div className="flex items-center gap-9 mt-14">
      <span className="text-blue-900 text-[15px] font-semibold">
        Follow me:
      </span>
      <span>
        <a href="#github" className="text-blue-900 text-lg">
          <i className="ri-github-fill"></i>
        </a>
      </span>
      <span>
        <a href="#facebook" className="text-blue-900 text-lg">
          <i className="ri-facebook-circle-fill"></i>
        </a>
      </span>
      <span>
        <a href="#instagram" className="text-blue-900 text-lg">
          <i className="ri-instagram-fill"></i>
        </a>
      </span>
      <span>
        <a href="#twitter" className="text-blue-900 text-lg">
          <i className="ri-twitter-fill"></i>
        </a>
      </span>
      <span>
        <a href="#twitter" className="text-blue-900 text-lg">
          <i className="ri-whatsapp-fill"></i>
        </a>
      </span>
    </div>
  );
}

export default SocialMedia;
