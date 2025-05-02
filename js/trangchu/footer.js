document.addEventListener("DOMContentLoaded", () => {
  // Tải nội dung footer từ file footer.html
  fetch("../../pages/components/footer.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Lỗi HTTP! Mã trạng thái: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      const footerElement = document.getElementById("footer");
      if (footerElement) {
        footerElement.innerHTML = html;
      } else {
        console.error("Không tìm thấy phần tử có id là 'footer' trong DOM.");
      }
    })
    .catch((error) => {
      console.error("Đã xảy ra lỗi khi tải footer:", error.message);
    });
});
