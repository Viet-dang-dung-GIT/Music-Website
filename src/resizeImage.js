document.addEventListener("DOMContentLoaded", function() {
  resizeImages(); // Gọi hàm resizeImages khi trang được tải

  window.addEventListener("resize", function() {
    resizeImages(); // Gọi hàm resizeImages khi kích thước trình duyệt thay đổi
  });
});

function resizeImages() {
  // Lấy tất cả các ảnh trong carousel
  var images = document.querySelectorAll(".sectionContent img");

  images.forEach(function(image) {
    // Đặt kích thước mới cho mỗi ảnh (ví dụ: 300px độ rộng)
    image.style.width = "350px";
    // Có thể đặt chiều cao theo tỉ lệ hoặc giữ nguyên tỉ lệ tùy ý
    image.style.height = "350px"; // Giữ nguyên tỉ lệ
  });
}