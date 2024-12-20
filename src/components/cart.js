import React, { useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Divider,
  Button,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

// Replace with your actual background image URL
const backgroundImageUrl = "https://wallpaperaccess.com/full/1621520.jpg";

function Cart() {
  const location = useLocation();
  const initialCart = location.state ? location.state.cart : [];
  const navigate = useNavigate();

  // State to manage the cart items
  const [cart, setCart] = useState(initialCart);

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  return (
    <Container
      sx={{
        mt: 4,
        mb: 4,
        backgroundImage: `url(${backgroundImageUrl})`, // Fixed backgroundImage formatting
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh", // Ensures the background covers the entire viewport
        minWidth:"200vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6">Your cart is empty</Typography>
      ) : (
        <List
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: 4,
            padding: 2,
            marginTop: 4,
          }}
        >
          {cart.map((item) => (
            <div key={item.id}>
              <ListItem>
                <ListItemAvatar>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: 100,
                      height: 100,
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={item.name}
                  secondary={`Price: ₹${item.price}`} // Example secondary text
                />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => removeFromCart(item.id)} // Remove item on click
                >
                  Remove
                </Button>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("#")}
        sx={{ mt: 2 }}
      >
        Back to Shopping

      </Button>
    </Container>
  );
}

export default Cart;
