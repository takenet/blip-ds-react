import { iconType } from './Notification-interface';

const showWebNotification = (
  title: string = '',
  description?: string,
  icon: iconType | string = '',
  uptime: number = 1
) => {
  const setIllustrationContent = async (icon: iconType | string) => {
    if (typeof icon != 'string') {
      const apiUrl = `https://cdn.jsdelivr.net/npm/blip-tokens/build/json/illustrations/${icon.type}/${icon.name}.json`;
      let data = await fetch(apiUrl).then((response) =>
        response.json().then((data) => {
          return `data:image/svg+xml;base64,${data[`asset-${icon.type}-${icon.name}-svg`]}`;
        })
      );
      renderNotification(title, description, data, uptime);
    } else {
      renderNotification(title, description, icon, uptime);
    }
  };

  setIllustrationContent(icon);

  const renderNotification = (title: string = '', description?: string, icon?: string, uptime: number = 1) => {
    // Here the notification is created.
    const notification = new Notification(title, {
      body: description,
      icon: icon,
    });

    // Here we will trigger an event to export the notification.
    window.dispatchEvent(new CustomEvent('pushWebNotification', { detail: notification }));

    // Here you define the notification activity time.
    setTimeout(() => {
      notification.close();
    }, uptime * 1000);
  };
};

export default showWebNotification;
