import { Button, Card, Input } from "antd";
import Form from "antd/lib/form/Form";
import React from "react";

export default function EditPostPage() {
  return (
    <Card>
      <h3>Изменить пост</h3>
      <Form>
        <Input
          placeholder="CARD TITLE"
          value={"CARD TITLE"}
          style={{ margin: "10px 0" }}
        />
        <Input.TextArea
          style={{ marginBottom: "10px" }}
          autoSize={true}
          value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quod
        eum hic soluta quidem quisquam perferendis dolores odio possimus
        velit quia obcaecati sunt dignissimos, optio aut magni libero animi
        nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
        quod eum hic soluta quidem quisquam perferendis dolores odio possimus velit quia obcaecati sunt dignissimos, optio aut magni
        libero animi nam? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Eaque quod eum hic soluta quidem quisquam perferendis dolores
        odio possimus velit quia obcaecati sunt dignissimos, optio aut magni
        libero animi nam? "
        />
        <Button className="button mr-15 mt-20" type="primary" htmlType="submit">
          Изменить
        </Button>
        <Button
          className="button mt-20"
          onClick={() => console.log(false)}
          type="danger"
        >
          Отмена
        </Button>
      </Form>
    </Card>
  );
}
