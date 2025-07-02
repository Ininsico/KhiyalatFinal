import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Premium = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        name: 'Guest',
        isPremium: false,
        email: ''
    });
    const [selectedPlan, setSelectedPlan] = useState('yearly');
    const [paymentMethod, setPaymentMethod] = useState('card');
    const [cardDetails, setCardDetails] = useState({
        number: '',
        expiry: '',
        cvc: '',
        name: ''
    });
    const [isProcessing, setIsProcessing] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [couponCode, setCouponCode] = useState('');
    const [discountApplied, setDiscountApplied] = useState(false);

    useEffect(() => {
        // Load user data from localStorage (same as Dashboard)
        const storedUser = localStorage.getItem('khiyalat-user') || sessionStorage.getItem('khiyalat-user');
        if (storedUser) {
            const userData = JSON.parse(storedUser);
            setUser({
                name: userData.name,
                isPremium: userData.isPremium || false,
                email: userData.email || ''
            });
        }
    }, []);

    const plans = {
        monthly: {
            price: 9.99,
            features: [
                'Unlimited prompts',
                'Priority access',
                'Faster responses',
                'Advanced models access',
                'Cancel anytime'
            ]
        },
        yearly: {
            price: 99.99,
            originalPrice: 119.88,
            features: [
                'Everything in monthly',
                '2 months free',
                'Special member badge',
                'Early access to new features',
                'Priority support'
            ]
        },
        lifetime: {
            price: 199.99,
            features: [
                'Everything in yearly',
                'One-time payment',
                'Lifetime updates',
                'Exclusive community access',
                'VIP support'
            ]
        }
    };

    const applyCoupon = () => {
        if (couponCode.toLowerCase() === 'khiyalat20') {
            setDiscountApplied(true);
            return true;
        }
        return false;
    };

    const calculateTotal = () => {
        const basePrice = plans[selectedPlan].price;
        if (discountApplied) {
            return basePrice * 0.8; // 20% discount
        }
        return basePrice;
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Update user to premium
        const updatedUser = {
            ...JSON.parse(localStorage.getItem('khiyalat-user') || {}),
            isPremium: true,
            promptCount: 0, // Reset prompt count
            lastPromptTime: null
        };

        localStorage.setItem('khiyalat-user', JSON.stringify(updatedUser));
        setIsProcessing(false);
        setIsSuccess(true);

        // Redirect after success
        setTimeout(() => {
            navigate('/dashboard');
        }, 3000);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#8A2BE2] to-[#FF2D75] flex items-center justify-center p-4">
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-xl"
                >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
                    <p className="text-gray-600 mb-6">Welcome to Khiyalat AI Premium, {user.name}!</p>
                    <p className="text-gray-500">Redirecting to your dashboard...</p>
                    <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full animate-progress"></div>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                        Upgrade to <span className="bg-gradient-to-r from-[#FF2D75] to-[#8A2BE2] bg-clip-text text-transparent">Khiyalat AI Premium</span>
                    </h1>
                    <p className="mt-3 text-xl text-gray-500">
                        Unlock unlimited access and powerful features
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Plan Selection */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-2 bg-white rounded-xl shadow-md overflow-hidden"
                    >
                        <div className="p-6">
                            <h2 className="text-xl font-bold text-gray-800 mb-6">Choose Your Plan</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                {Object.entries(plans).map(([key, plan]) => (
                                    <motion.div
                                        key={key}
                                        whileHover={{ scale: 1.03 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedPlan === key ? 'border-[#8A2BE2] ring-2 ring-[#8A2BE2]/30' : 'border-gray-200 hover:border-[#8A2BE2]/50'}`}
                                        onClick={() => setSelectedPlan(key)}
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-bold text-gray-800 capitalize">{key}</h3>
                                                <div className="mt-2">
                                                    <span className="text-2xl font-bold text-gray-900">${plan.price}</span>
                                                    {key === 'yearly' && (
                                                        <span className="ml-2 text-sm text-gray-500 line-through">${plan.originalPrice}</span>
                                                    )}
                                                    {key === 'yearly' && (
                                                        <span className="block text-sm text-green-500">Save 16%</span>
                                                    )}
                                                </div>
                                            </div>
                                            {selectedPlan === key && (
                                                <div className="bg-[#8A2BE2] text-white p-1 rounded-full">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        <ul className="mt-4 space-y-2 text-sm text-gray-600">
                                            {plan.features.map((feature, i) => (
                                                <li key={i} className="flex items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#8A2BE2] mr-2" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Coupon Code */}
                            <div className="mb-8">
                                <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 mb-2">Coupon Code</label>
                                <div className="flex">
                                    <input
                                        type="text"
                                        id="coupon"
                                        value={couponCode}
                                        onChange={(e) => setCouponCode(e.target.value)}
                                        className="flex-1 rounded-l-md border-gray-300 shadow-sm focus:border-[#8A2BE2] focus:ring-[#8A2BE2] px-4 py-2 border"
                                        placeholder="Enter coupon code"
                                    />
                                    <button
                                        onClick={applyCoupon}
                                        className="bg-[#8A2BE2] text-white px-4 py-2 rounded-r-md hover:bg-[#7B1FA2] transition-colors"
                                    >
                                        Apply
                                    </button>
                                </div>
                                {discountApplied && (
                                    <p className="mt-2 text-sm text-green-600">20% discount applied!</p>
                                )}
                            </div>

                            {/* Payment Method */}
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`border rounded-lg p-4 cursor-pointer ${paymentMethod === 'card' ? 'border-[#8A2BE2] ring-2 ring-[#8A2BE2]/30' : 'border-gray-200'}`}
                                        onClick={() => setPaymentMethod('card')}
                                    >
                                        <div className="flex items-center">
                                            <div className="bg-[#8A2BE2]/10 p-2 rounded-md mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8A2BE2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-800">Credit/Debit Card</h4>
                                                <p className="text-sm text-gray-500">Pay with Visa, Mastercard, etc.</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`border rounded-lg p-4 cursor-pointer ${paymentMethod === 'paypal' ? 'border-[#8A2BE2] ring-2 ring-[#8A2BE2]/30' : 'border-gray-200'}`}
                                        onClick={() => setPaymentMethod('paypal')}
                                    >
                                        <div className="flex items-center">
                                            <div className="bg-blue-100 p-2 rounded-md mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M7.5 7.5h9v9h-9z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-gray-800">PayPal</h4>
                                                <p className="text-sm text-gray-500">Pay with your PayPal account</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {paymentMethod === 'card' && (
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                                            <input
                                                type="text"
                                                id="card-number"
                                                value={cardDetails.number}
                                                onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#8A2BE2] focus:ring-[#8A2BE2] px-4 py-2 border"
                                                placeholder="1234 5678 9012 3456"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                                                <input
                                                    type="text"
                                                    id="expiry"
                                                    value={cardDetails.expiry}
                                                    onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                                                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#8A2BE2] focus:ring-[#8A2BE2] px-4 py-2 border"
                                                    placeholder="MM/YY"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">CVC</label>
                                                <input
                                                    type="text"
                                                    id="cvc"
                                                    value={cardDetails.cvc}
                                                    onChange={(e) => setCardDetails({...cardDetails, cvc: e.target.value})}
                                                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#8A2BE2] focus:ring-[#8A2BE2] px-4 py-2 border"
                                                    placeholder="123"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="card-name" className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                                            <input
                                                type="text"
                                                id="card-name"
                                                value={cardDetails.name}
                                                onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                                                className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#8A2BE2] focus:ring-[#8A2BE2] px-4 py-2 border"
                                                placeholder={user.name}
                                            />
                                        </div>
                                    </div>
                                )}

                                {paymentMethod === 'paypal' && (
                                    <div className="bg-gray-50 p-4 rounded-md">
                                        <p className="text-gray-600">You'll be redirected to PayPal to complete your payment</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Order Summary */}
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-xl shadow-md overflow-hidden h-fit sticky top-8"
                    >
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-lg font-bold text-gray-800">Order Summary</h2>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-gray-600">Plan</span>
                                <span className="font-medium capitalize">{selectedPlan}</span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-gray-600">Price</span>
                                <span className="font-medium">${plans[selectedPlan].price}</span>
                            </div>
                            {discountApplied && (
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-600">Discount (20%)</span>
                                    <span className="font-medium text-green-600">-${(plans[selectedPlan].price * 0.2).toFixed(2)}</span>
                                </div>
                            )}
                            <div className="border-t border-gray-200 my-4"></div>
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-gray-800 font-bold">Total</span>
                                <span className="text-xl font-bold text-[#8A2BE2]">${calculateTotal().toFixed(2)}</span>
                            </div>

                            <button
                                onClick={handlePayment}
                                disabled={isProcessing}
                                className={`w-full bg-gradient-to-r from-[#FF2D75] to-[#8A2BE2] text-white py-3 px-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all ${isProcessing ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isProcessing ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    `Pay $${calculateTotal().toFixed(2)}`
                                )}
                            </button>

                            <p className="mt-4 text-xs text-gray-500 text-center">
                                By completing your purchase, you agree to our <a href="#" className="text-[#8A2BE2] hover:underline">Terms of Service</a> and <a href="#" className="text-[#8A2BE2] hover:underline">Privacy Policy</a>.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Premium;