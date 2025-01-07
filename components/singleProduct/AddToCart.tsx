"use client";
import { useState } from "react";
import SelectProductAmount from "./SelectProductAmount";
import SelectProductType from "./SelectProductTypes";
import { Mode } from "./SelectProductAmount";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Buttons";
import { addToCartAction } from "@/utils/actions";
import { useAuth } from "@clerk/nextjs";
import { ProductSignInButton } from "../form/Buttons";
import { parseCSVData } from "@/utils/helpers";
import { ProductSpec } from "@/utils/types";
function AddToCart({ productId }: { productId: string }) {
  const [amount, setAmount] = useState(1);
  const [selectedType, setSelectedType] = useState("");
  const { userId } = useAuth();
  return (
    <div className="mt-4">
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      <SelectProductType
        productId={productId}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type="hidden" name="productId" value={productId} />
          <input type="hidden" name="amount" value={amount} />
          <input type="hidden" name="type" value={selectedType} />
          <SubmitButton text="add to cart" size="default" className="mt-8" />
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}
    </div>
  );
}
export default AddToCart;
