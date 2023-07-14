import instance from "../configs/config";

export const getAllProduct = (dispatch, navigate, accessToken) => {
  try {
    const res = instance.get("/product", {
      header: { token: `Bearer ${accessToken}`},
    });
    return res
  } catch (error) {
    console.log(error);
    navigate("/admin");
  }
};
export const getBySlug = (slug,dispatch, navigate, accessToken) => {
  try {
    const res = instance.get(`/product/${slug}`, {
      header: { token: `Bearer ${accessToken}`},
    });
    return res
  } catch (error) {
    console.log(error);
    navigate("/admin");
  }
};
export const createProduct = (formData, navigate, accessToken) => {
  try {
    const res = instance.post("/product",formData, {
      header: { token: `Bearer ${accessToken}`},
    });
    return res
  } catch (error) {
    console.log(error);
    navigate("/admin/product");
  }
};
export const updateProduct = (id,formData, navigate, accessToken) => {
  try {
    const res = instance.put(`/product/edit/${id}`,formData, {
      header: { token: `Bearer ${accessToken}`},
    });
    return res
  } catch (error) {
    console.log(error);
    navigate("/admin/product");
  }
};
export const deleteProduct = (id, navigate, accessToken) => {
  try {
    const res = instance.delete(`/product/${id}`, {
      header: { token: `Bearer ${accessToken}`},
    });
    return res
  } catch (error) {
    console.log(error);
    navigate("/admin/product");
  }
};
