let notificationCount = 0;
const $displayNotificationCount = document.getElementById(
  "notification-count-display"
);
const $markAllReadButton = document.getElementById("mark-all-read-button");
const $notificationItems = document.querySelectorAll(".notifications li");

function markAllNotificationsAsRead() {
  $notificationItems.forEach(($item) => {
    $item.classList.remove("active");
  });
  notificationCount = 0;
  $displayNotificationCount.textContent = notificationCount;
}

$markAllReadButton.addEventListener("click", markAllNotificationsAsRead);

$notificationItems.forEach(($item) => {
  $item.addEventListener("click", () => {
    $item.classList.toggle("active");

    if ($item.classList.contains("active")) {
      notificationCount++;
    } else {
      notificationCount--;
    }

    $displayNotificationCount.textContent = notificationCount;
  });
});
