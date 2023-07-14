import { useEffect, useState } from "react";
import styled from "styled-components";

import Grid from "../../components/Grid";
import Section, { SectionBody, SectionTitle } from "../../components/Section";
import ProductCart from "../../components/ProductCart";
import Helmet from "../../components/Hemet";
import * as productService from "../../service/productService";
import {getProducts} from "../../util/product"
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
function Home() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await productService.getAllProduct();

      setProductList(res.data.product);
    })();
  }, []);


  return (
    <div>
      <div className="product">
        <Helmet title="Trang Chủ ">
          <Wrapper>
            <Section>
              <SectionTitle>Sản phẩm bán chạy</SectionTitle>
              <SectionBody>
                <Grid col={4} smCol={1} mdCol={2} gap={40}>
                  {getProducts(4,productList).map((item, index) => (
                    <ProductCart
                      key={index}
                      image={item.image}
                      title={item.title}
                      slug={item.slug}
                      price={Number(item.price)}
                    />
                  ))}
                </Grid>
              </SectionBody>
            </Section>
          </Wrapper>
        </Helmet>
      </div>
    </div>
  );
}

export default Home;
