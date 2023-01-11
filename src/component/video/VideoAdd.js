import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";

// import { createPost, updatePost } from "../../actions/tours";
const VideoAdd = ({ editData, setEditData, edu, setEdu, ent, setEnt }) => {
  // let i = 0;
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(editData);
  const [vCardData, setVCardData] = useState({
    name: "",
    vurl: "",
    turl: "",
  });

  useEffect(() => {
    console.log(editData, "vv");
    setFormData(editData);
    form.resetFields();
  }, [editData]);
  const dispatch = useDispatch();
  const onFinish = (values) => {
    setEdu([...edu, { ...values, id: Date.now() }]);
    // if (editData.length != edu.length)
    // else setEdu([...c]);
  };
  const edithan = (values) => {
    console.log(form.getFieldValue(), "ff");
    let c = edu.map((data) =>
      data?.id === editData?.id
        ? { ...form?.getFieldValue(), id: Date.now() }
        : data
    );
    let c2 = ent.map((data) =>
      data?.id === editData?.id
        ? { ...form?.getFieldValue(), id: Date.now() }
        : data
    );
    setEdu([...c]);
    setEnt([...c2]);

    setEditData({
      name: "",
      turl: "",
      vurl: "",
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      form={form}
      name="basic"
      initialValues={editData}
      // value={formData}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Name"
        name="name"
        wrapperCol={{
          span: 5,
        }}
        rules={[
          {
            required: true,
            message: "Please Your Name!",
          },
        ]}
      >
        <Input
          onChange={(e) => setVCardData({ ...vCardData, name: e.target.value })}
        />
      </Form.Item>
      <Form.Item
        name="turl"
        label="Thumbnail URL"
        wrapperCol={{
          span: 10,
        }}
        rules={[
          {
            required: false,
          },
          {
            type: "url",
            warningOnly: true,
          },
          {
            type: "string",
            min: 6,
          },
        ]}
      >
        <div style={{ display: "flex" }}>
          <Input
            placeholder="Add Thumbnail URL"
            // onChange={(e) =>
            //   setVCardData({ ...vCardData, url: e.target.value })
            // }
          />
        </div>
      </Form.Item>
      <Form.Item
        name="vurl"
        label="Video URL"
        wrapperCol={{
          span: 10,
        }}
        rules={[
          {
            required: false,
          },
          {
            type: "url",
            warningOnly: true,
          },
          {
            type: "string",
            min: 6,
          },
        ]}
      >
        <div style={{ display: "flex" }}>
          <Input
            placeholder="Add Video URL"
            // onChange={(e) =>
            //   setVCardData({ ...vCardData, url: e.target.value })
            // }
          />
          {editData.name == 0 && (
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginLeft: "1rem" }}
            >
              Submit
            </Button>
          )}
          {editData.name != 0 && (
            <Button
              type="primary"
              onClick={edithan}
              style={{ marginLeft: "1rem" }}
            >
              edit
            </Button>
          )}
        </div>
      </Form.Item>
    </Form>
  );
};
export default VideoAdd;
