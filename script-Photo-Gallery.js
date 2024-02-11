document.addEventListener('DOMContentLoaded', function () 
{
  const gallery = document.querySelector('.gallery');
  const modal = document.querySelector('.modal');
  const modalImg = document.querySelector('.modal-content');
  const closeBtn = document.querySelector('.close');
  const body = document.querySelector('body');
  let currentImageIndex = 0;

  const imageSources = Array.from(gallery.querySelectorAll('img')).map(img => img.src);

  gallery.addEventListener('click', function (event)
  {
      if (event.target.tagName === 'IMG')
      {
          modal.style.display = 'block';
          modalImg.src = event.target.src;
          currentImageIndex = imageSources.indexOf(event.target.src);
      }
  });

  closeBtn.addEventListener('click', function ()
  {
      modal.style.display = 'none';
  });

  modal.addEventListener('click', function (event) 
  {
      if (event.target === modal) 
      {
          modal.style.display = 'none';
      }
  });

  body.addEventListener('keydown', function (event) 
  {
      if (modal.style.display === 'block') 
      {
          if (event.key === 'ArrowRight') 
          {
              currentImageIndex = (currentImageIndex + 1) % imageSources.length;
              modalImg.src = imageSources[currentImageIndex];
          } 
          else if (event.key === 'ArrowLeft') 
          {
              currentImageIndex = (currentImageIndex - 1 + imageSources.length) % imageSources.length;
              modalImg.src = imageSources[currentImageIndex];
          } 
          else if (event.key === 'Escape') 
          {
              modal.style.display = 'none';
          }
      }
  });
});