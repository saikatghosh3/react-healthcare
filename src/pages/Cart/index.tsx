import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { PaymentModal } from '../../components/PaymentModal';

interface CartItem {
  id: number;
  title: string;
  price: string;
  type: string;
}

export const Cart = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price;
    }, 0);
  };

  const handleCheckout = () => {
    setShowPayment(true);
  };

  const handlePaymentSuccess = () => {
    setTimeout(() => {
      navigate('/services');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some diagnostic services to get started</p>
            <button
              onClick={() => navigate('/services')}
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Browse Services
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <button
            onClick={() => navigate('/services')}
            className="flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Continue Shopping
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3">Product</th>
                  <th className="text-left py-3">Available</th>
                  <th className="text-left py-3">Quantity</th>
                  <th className="text-left py-3">Price</th>
                  <th className="text-right py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4">{item.title}</td>
                    <td className="py-4">
                      <span className="text-green-600">In Stock</span>
                    </td>
                    <td className="py-4">1</td>
                    <td className="py-4">{item.price}</td>
                    <td className="py-4 text-right">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-xl font-bold">
            Total: ${calculateTotal().toFixed(2)}
          </div>
          <div className="space-x-4">
            <button
              onClick={() => navigate('/services')}
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50"
            >
              Continue Shopping
            </button>
            <button
              onClick={handleCheckout}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>

      {showPayment && (
        <PaymentModal
          amount={calculateTotal()}
          serviceDetails={{
            title: cart[0].title,
            type: cart[0].type
          }}
          onClose={() => setShowPayment(false)}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
};