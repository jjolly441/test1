import NavbarLayout from '@component/layout/NavbarLayout'
import AvailableShops from '@component/products/AvailableShops'
import FrequentlyBought from '@component/products/FrequentlyBought'
import ProductDescription3 from '@component/products/ProductDescription3'
import ProductIntro3 from '@component/products/ProductIntro3'
import ProductReview3 from '@component/products/ProductReview3'
import RelatedProducts from '@component/products/RelatedProducts'
import { Box, Tab, Tabs } from '@material-ui/core'
import { styled } from '@material-ui/core/styles'
import React, { useState } from 'react'

const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginTop: 80,
  marginBottom: 24,
  minHeight: 0,
  borderBottom: `1px solid ${theme.palette.text.disabled}`,
  '& .inner-tab': {
    fontWeight: 600,
    minHeight: 40,
    textTransform: 'capitalize',
  },
}))

const ProductDetails = () => {
  const state = {
    title: 'Electrical Engineering Fundamentals - 17th Edition',
    price: 15,
  }

  const [selectedOption, setSelectedOption] = useState(0)
  //   const classes = useStyles()

  const handleOptionClick = (_event: React.ChangeEvent<{}>, newValue: number) => {
    setSelectedOption(newValue)
  }

  return (
    <NavbarLayout>
      <ProductIntro3 {...state} />

      <StyledTabs
        value={selectedOption}
        onChange={handleOptionClick}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab className="inner-tab" label="Description" />
        <Tab className="inner-tab" label="Review (3)" />
      </StyledTabs>

      <Box mb={6}>
        {selectedOption === 0 && <ProductDescription3 />}
        {selectedOption === 1 && <ProductReview3 />}
      </Box>

      <FrequentlyBought />

      <AvailableShops />

      <RelatedProducts />
    </NavbarLayout>
  )
}

export default ProductDetails
