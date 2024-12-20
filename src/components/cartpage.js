import React, { useState } from "react";
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button, TextField, Badge, IconButton, Popover, List, ListItem, ListItemText, Divider } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom";

const items = [
  { id: 1, name: "Atorvastatin " , price:'10,999/-' , image: "https://i.pinimg.com/564x/5a/af/9e/5aaf9e21cfdc8d2852766a43b765020a.jpg"},
  { id: 2, name: "Vitamin-E", image: "https://cdn.pixabay.com/photo/2015/12/06/18/28/capsules-1079838_1280.jpg" },
  { id: 3, name: "Amoxicillin 1000mg", image: "https://5.imimg.com/data5/SELLER/Default/2020/12/HD/IF/ML/95289/amoxicillin-tablets-1000mg-500x500.jpeg" },
  { id: 4, name: "Atorvastatin 20mg", image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTjz6f009HDa5gnMV1FpX6ofRSXD8wZRKf5MtdRwpdvn2cc_Mi8" },
  { id: 5, name: "Cough Syrup", image: "https://th.bing.com/th/id/OIP.vvLBgao6atfvdrBITYF4LgHaHa?w=192&h=192&c=7&r=0&o=5&pid=1.7" },
  { id: 6, name: "Paracitamol", image: "data:image/jpeg;base64,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" },
];

function Cartpage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleCartClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigateToCartPage = () => {
    navigate("/cart", { state: { cart } }); // Navigate to the '/cart' route with cart state
  };

  return (
    <Container sx={{ mt: 4, mb: 4 }} style={{backgroundColor:'#e3f1f7', backgroundSize:'cover'}}>
      <center><h1>Medicines</h1></center>
      <Grid container spacing={0} alignItems="center" sx={{ mb: 6 }}>
        <Grid item xs={10}>
          <TextField
            label="Search Products"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid item xs={2} display="flex" justifyContent="flex-end">
          <IconButton color="primary" onClick={handleCartClick}>
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <List sx={{ width: 300 }}>
              {cart.map((item) => (
                <div key={item.id}>
                  <ListItem>
                    <CardMedia
                      component="img"
                      height="100"
                      image={item.image}
                      alt={item.name}
                      sx={{ width: 100, mr: 2 }}
                    />
                    <ListItemText
                      primary={item.name}
                      secondary="Additional product details go here."
                    />
                  </ListItem>
                  <Divider />
                </div>
              ))}
            </List>
            <Button onClick={navigateToCartPage}>View Cart</Button>
          </Popover>
        </Grid>
      </Grid>
      <Grid container spacing={4} justifyContent="center" id="medicines"> {/* Added id for medicines section */}
        {filteredItems.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                minHeight: 350,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.name}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                color="primary"
                sx={{ m: 1 }}
                style={{backgroundColor:'skyblue'}}
                onClick={() => handleAddToCart(item)}
              >
                Add To Cart
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ m: 1 }}
                style={{backgroundColor:'blue'}}
                onClick={() => handleAddToCart(item)}
              >
                Shop Now
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Cartpage;
