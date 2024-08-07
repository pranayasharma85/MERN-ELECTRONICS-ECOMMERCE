import { Helmet } from "react-helmet-async";

function Meta({
  title = "Welcome to Broadway",
  description = "Test description",
  kewyords = "ecommerce,broadway",
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={kewyords} />
    </Helmet>
  );
}

export default Meta;
