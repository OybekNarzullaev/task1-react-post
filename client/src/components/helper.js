import { notification } from "antd";

export let openNotificationSuccess = (description) => {
  notification.success({
    message: `Done!`,
    description,
  });
};

export let onFinishFailed = (errorInfo) => {
  notification.error({
    message: "Ошибка",
    description: errorInfo,
  });
};

export let openFinishSucces = (success) => {
  notification.success({
    message: "Успешно",
    description: success,
  });
};
