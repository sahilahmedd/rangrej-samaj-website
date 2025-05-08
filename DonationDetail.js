//company logo
//company name
//company messg
//company overview
//updates regarding past events
//company address
//company images
//company donation, chat and share button

import React, {useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Animated,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  TextInput,
  Linking,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import leftback from '../provider/png/leftback.png';
import logo1 from '../provider/png/logo1.png';
import Swiper from 'react-native-swiper';
import donation1 from '../provider/png/donation1.png';
import donation2 from '../provider/png/donation2.png';
import donation3 from '../provider/png/donation3.png';
import donation4 from '../provider/png/donation4.png';
import doller from '../provider/png/doller.png';
import whatsapp from '../provider/png/whatsapp.png';
import share from '../provider/png/share.png';
import BackgroundImage from '../provider/png/BackgroundImage.png';
import moment from 'moment';
import Modal from 'react-native-modal';
import RazorpayCheckout from 'react-native-razorpay';
import {getData, async_keys} from '../api/UserPreference';
import axios from 'axios';
import PaymentSucessfully from '../provider/png/PaymentSucessfully.png';
import cancel from '../provider/png/cancel.png';
import processingpayment from '../provider/png/paymentprocessing.png';
import moneychecked from '../provider/png/moneychecked.png';

const DonationDetail = ({route, props, navigation}) => {
  const {event} = route.params || {};
  const [isAmountModalVisible, setIsAmountModalVisible] = useState(false);
  const [customAmount, setCustomAmount] = useState('');
  const [userData, setUserData] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentProcessingSuccess, setPaymentProcessingSuccess] =
    useState(false);
  // console.log('Received Event Data:', event.createdEventDate);

  console.log('wqwq', event);

  // useEffect(() => {
  //   if (paymentSuccess) {
  //     setPaymentProcessingSuccess(false);
  //   }
  // }, [paymentSuccess]);

  const openWhatsApp = () => {
    const url = `https://wa.me/91${event.EventContact}`;

    // Check if the device can open the URL
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getData(async_keys.user_data);
      console.log('User Data:', userData?.PR_MOBILE_NO);
      setUserData(userData);
    };
    fetchUserData();
  }, []);

  const PaymentCaptureComponent = ({paymentId, amount, eventId, userId}) => {
    const [isCaptured, setIsCaptured] = useState(false); // To prevent multiple calls

    useEffect(() => {
      const capturePayment = async () => {
        try {
          const response = await axios.post(
            'https://node2-plum.vercel.app/api/user/capture-payment',
            {
              paymentId,
              amount: parseFloat(amount),
              eventId,
              userId,
              currency: 'INR',
              status: 'completed',
              timestamp: new Date().toISOString(),
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
          );

          if (response.data.success) {
            console.log('Payment captured successfully:', response.data.data);
            setIsCaptured(true); // Prevent re-calling
            // show success message or update UI
          } else {
            console.error('Payment capture failed:', response.data.error);
          }
        } catch (error) {
          console.error(
            'Error during capture:',
            error.response?.data || error.message,
          );
        }
      };

      // Trigger only when both paymentId and amount are available and not already captured
      capturePayment();
    }, [paymentId, amount, isCaptured, eventId, userId]);

    return null; // or return a message like "Capturing payment..."
  };

  const currentDate = moment();

  const pastEvents = Array.isArray(event.pastEvents)
    ? event.pastEvents.filter(
        e => moment(e.createdEventDate, 'YYYY-MM-DD').isBefore(currentDate),
        // console.log('khdkh', e),
      )
    : [];

  // console.log('212ewqqwsqwd', currentDate);
  // console.log('2222222222222222', pastEvents);

  const [amount, setAmount] = useState('');

  const scrollY = useRef(new Animated.Value(0)).current;

  // Animated image properties
  const imageHeight = scrollY.interpolate({
    inputRange: [0, 150], // Scroll distance
    outputRange: [hp(27), hp(15)], // Image height range
    extrapolate: 'clamp', // Prevent values outside range
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [1, 3], // Fade image as it shrinks
    extrapolate: 'clamp',
  });

  const openCheckout = async amount => {
    const amountInPaise = parseFloat(amount) * 100;
    var options = {
      description: `Payment for ${event.name}`,
      image: 'https://your-logo-url.com',
      currency: 'INR',
      key: 'rzp_test_ANawZDTfnQ7fjY',
      amount: amountInPaise.toString(),
      name: event.name,
      prefill: {
        contact: userData.PR_MOBILE_NO || '',
        name: userData.PR_FULL_NAME || '',
        // email: userData.PR_EMAIL || '',
      },
      theme: {color: '#53a20e'},
    };

    try {
      const paymentData = await RazorpayCheckout.open(options);
      console.log('Full Payment Data:', paymentData);

      if (!paymentData.razorpay_payment_id) {
        throw new Error('No payment ID received from Razorpay');
      }

      // alert('Payment successful! Processing donation...');
      setPaymentProcessingSuccess(true);

      // First, fetch the full payment details from Razorpay
      const razorpayPaymentDetails = await axios.get(
        `https://api.razorpay.com/v1/payments/${paymentData.razorpay_payment_id}`,
        {
          auth: {
            username: 'rzp_test_ANawZDTfnQ7fjY',
            password: 'wLd92JBcxtJbGVh0GWCToYYx',
          },
        },
      );

      const fullPaymentData = razorpayPaymentDetails.data;
      console.log('Full Payment Details:', fullPaymentData);

      // Prepare the complete capture payload with all details
      const capturePayload = {
        paymentId: paymentData.razorpay_payment_id,
        amount: parseFloat(amount),
        ENVIT_ID: event.id,
        PR_FULL_NAME: userData?.PR_FULL_NAME || '',
        entity: fullPaymentData.entity || 'payment',
        currency: fullPaymentData.currency || 'INR',
        status: fullPaymentData.status || 'captured',
        order_id: fullPaymentData.order_id || null,
        invoice_id: fullPaymentData.invoice_id || null,
        international: fullPaymentData.international ? 1 : 0,
        method: fullPaymentData.method || '',
        amount_refunded: fullPaymentData.amount_refunded || 0,
        refund_status: fullPaymentData.refund_status ? 1 : 0,
        captured: fullPaymentData.captured || false,
        description: fullPaymentData.description || `Payment for ${event.name}`,
        bank: fullPaymentData.bank ? 1 : 0,
        wallet: fullPaymentData.wallet ? 1 : 0,
        vpa: fullPaymentData.vpa ? 1 : 0,
        email: fullPaymentData.email || '',
        contact: fullPaymentData.contact || userData.PR_MOBILE_NO || '',
        fee: fullPaymentData.fee || 0,
        tax: fullPaymentData.tax || 0,
        error_code: fullPaymentData.error_code || '',
        error_description: fullPaymentData.error_description || '',
        error_source: fullPaymentData.error_source || '',
        error_step: fullPaymentData.error_step || '',
        error_reason: fullPaymentData.error_reason || '',
        JSON_LOG: JSON.stringify(fullPaymentData),
      };

      console.log('Sending capture payload:', capturePayload);

      // Make the capture request without timeout
      const captureResponse = await axios.post(
        'https://node2-plum.vercel.app/api/user/capture-payment',
        capturePayload,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (captureResponse.data.success) {
        // alert('Donation processed successfully! Thank you.');
        setPaymentSuccess(true);
        <View>
          <Text></Text>
        </View>;
      } else {
        throw new Error(captureResponse.data.error || 'Payment capture failed');
      }
    } catch (error) {
      console.error('Payment processing error:', {
        message: error.message,
        response: error.response?.data,
        stack: error.stack,
      });

      let errorMessage = 'Payment processing failed. ';

      if (error.response?.data?.error) {
        errorMessage += `Server error: ${error.response.data.error}`;
      } else if (error.message) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Unknown error occurred.';
      }

      if (paymentData?.razorpay_payment_id) {
        errorMessage += ` Please contact support with payment ID: ${paymentData.razorpay_payment_id}`;
      }

      alert(errorMessage);
    }
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <Animated.View
        style={[
          styles.imageContainer,
          {height: imageHeight, opacity: imageOpacity},
        ]}>
        <ImageBackground
          source={event.headerImage} // Replace with your image source
          style={styles.imageBackground}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.leftButton}>
              <Image
                source={leftback}
                style={styles.leftButtonImage}
                tintColor="#000000"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.rightButton}>
              <Image source={share} style={styles.rightButtonImage} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Animated.View>

      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          bounces={false}
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <LinearGradient
            start={{x: 1, y: 1.7}}
            end={{x: 0.2, y: 0}}
            colors={['#86a1ce', '#FFFFFF']}
            style={{flex: 1, paddingBottom: hp(10)}}>
            <View
              style={{
                marginHorizontal: wp(4.5),
                //  marginTop: hp(27)
                marginTop: hp(21.5),
              }}>
              <Text
                style={{
                  color: '#386641',
                  fontWeight: '500',
                  fontSize: hp(2.3),
                  width: wp(80),

                  marginTop: hp(6),
                  fontFamily: 'Poppins-SemiBold',
                }}>
                {event.name}
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <View
                    style={{
                      backgroundColor: '#DFE9F2',
                      borderRadius: wp(5),
                      marginTop: hp(0.5),
                      width: wp(90),
                    }}>
                    <Text
                      style={{
                        // borderWidth: wp(.1),
                        paddingHorizontal: wp(3),
                        paddingVertical: wp(2),
                        color: '#152340',
                        fontSize: hp(1.7),
                        width: wp(90), // marginLeft: wp(3),
                        marginTop: hp(1),
                        fontFamily: 'Poppins-Medium',
                      }}>
                      {event.message}
                    </Text>
                  </View>

                  <View
                    style={{
                      backgroundColor: '#F2F0CE',
                      elevation: 5,
                      borderRadius: wp(5),
                      marginTop: hp(1.2),
                      width: wp(90),
                    }}>
                    <Text
                      style={{
                        paddingHorizontal: wp(3),
                        paddingVertical: wp(2),

                        color: '#000',
                        fontWeight: '500',
                        fontSize: hp(1.6),
                        width: wp(90),
                        textAlign: 'left',

                        fontFamily: 'Poppins-Regular',
                      }}>
                      {event.Detail}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#D9C6A3',
                      elevation: 5,
                      borderRadius: wp(5),
                      marginTop: hp(1.2),
                      width: wp(90),
                    }}>
                    <Text
                      style={{
                        paddingHorizontal: wp(3),
                        paddingVertical: wp(2),

                        color: '#000',
                        fontWeight: '600',
                        fontSize: hp(1.6),
                        width: wp(90),
                        textAlign: 'left',
                        fontFamily: 'Poppins-Medium',
                      }}>
                      Location : {event.address}
                    </Text>
                    <Text
                      style={{
                        paddingHorizontal: wp(3),
                        paddingBottom: wp(2),
                        color: '#000',
                        fontWeight: '600',
                        fontSize: hp(1.6),
                        width: wp(73),
                        textAlign: 'left',

                        fontFamily: 'Poppins-Medium',
                      }}>
                      City: {event.city}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{marginTop: hp(2), marginHorizontal: wp(2)}}>
              <Swiper
                style={{height: hp(30)}}
                showsButtons={false}
                autoplay={false}
                showsPagination={true}
                paginationStyle={{position: 'absolute', top: 0, height: hp(57)}}
                dot={
                  <View
                    style={{
                      backgroundColor: '#7C8C42',
                      width: 7,
                      height: 7,
                      borderRadius: 5,
                      marginLeft: 2,
                      marginRight: 2,
                      marginTop: 2,
                      marginBottom: 2,
                    }}
                  />
                }
                activeDot={
                  <View
                    style={{
                      backgroundColor: '#1F260F',
                      width: 18,
                      height: 7,
                      borderRadius: 6,
                      marginLeft: 2,
                      marginRight: 2,
                      marginTop: 2,
                      marginBottom: 2,
                    }}
                  />
                }>
                {event.EventsImage?.uri &&
                  event.EventsImage.uri.split(', ').map((image, index) => (
                    <Image
                      key={index}
                      source={{uri: image.trim()}} // Ensure no spaces in URLs
                      style={{
                        height: hp(25),
                        width: wp(90),
                        alignItems: 'center',
                        alignSelf: 'center',
                        borderRadius: wp(8),
                        marginTop: hp(1),
                        resizeMode: 'cover',
                      }}
                    />
                  ))}
              </Swiper>
            </View>

            <Text
              style={{
                marginLeft: wp(6),
                fontSize: hp(2.2),
                fontFamily: 'Poppins-Medium',
                color: '#1F260F',
              }}>
              Past Events
            </Text>

            <View style={{marginTop: hp(1.5), alignItems: 'center'}}>
              {pastEvents.length > 0 ? (
                <FlatList
                  data={pastEvents}
                  horizontal={false}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate('DonationDetail', {
                          event: item,
                        })
                      }
                      style={{
                        marginHorizontal: wp(2),
                        width: wp(89),
                        paddingBottom: hp(1),
                        borderRadius: wp(3),
                        backgroundColor: '#D9CAAD',
                        elevation: 5,
                        marginBottom: hp(2),
                      }}>
                      <Text
                        style={{
                          color: '#000',
                          fontWeight: '500',
                          fontSize: hp(1.8),
                          width: wp(78),
                          // borderWidth: wp(.1),
                          marginLeft: wp(3),
                          marginTop: hp(0.6),
                          fontFamily: 'Poppins-Medium',
                        }}>
                        {moment(item.createdEventDate).format('DD MMM YYYY')}
                      </Text>
                      <Text
                        numberOfLines={2}
                        style={{
                          // borderWidth: wp(.1),
                          color: '#73524e',
                          fontWeight: '500',
                          fontSize: hp(2.2),
                          width: wp(78),
                          marginLeft: wp(3),
                          marginTop: hp(1),
                          fontFamily: 'Poppins-Medium',
                        }}>
                        {item.name}
                      </Text>

                      <Text
                        style={{
                          color: '#040c1b',
                          fontWeight: '500',
                          fontSize: hp(1.6),
                          width: wp(78),

                          marginLeft: wp(3),

                          marginTop: hp(1.6),
                          fontFamily: 'Poppins-Regular',
                        }}>
                        {item.message}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              ) : (
                <Text
                  style={{
                    color: '#73524e',
                    fontSize: hp(2),
                    fontFamily: 'Poppins-Medium',
                    alignSelf: 'center',
                  }}>
                  No past events available.
                </Text>
              )}
            </View>
          </LinearGradient>
        </KeyboardAwareScrollView>
      </Animated.ScrollView>

      <LinearGradient
        start={{x: 1, y: 1.7}}
        end={{x: 0.2, y: 0}}
        colors={['#152340', '#FFFFFF']}
        style={{
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: hp(0.8),
          backgroundColor: '#FFFFFF',
          width: wp(83),
          alignSelf: 'center',
          borderRadius: wp(10),
          marginBottom: hp(3),
          paddingHorizontal: wp(1.6),
        }}>
        <TouchableOpacity onPress={() => setIsAmountModalVisible(true)}>
          <LinearGradient
            start={{x: 1, y: 1.7}}
            end={{x: 0.2, y: 0}}
            colors={['#F27141', '#F2A950']}
            style={{
              backgroundColor: '#F27141',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: hp(1),
              width: wp(38),
              borderRadius: wp(10),
            }}>
            <Text
              style={{
                fontSize: hp(1.8),
                marginRight: wp(2.3),
                fontFamily: 'Poppins-SemiBold',
                color: '#FFFFFF',
              }}>
              Donate Me
            </Text>

            <Image source={doller} style={{height: hp(2.5), width: wp(5.2)}} />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={openWhatsApp}>
          <LinearGradient
            start={{x: 1, y: 1.7}}
            end={{x: 0.2, y: 0}}
            colors={['#02733E', '#038C4C']}
            style={{
              backgroundColor: '#F27141',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: hp(1),
              width: wp(38),
              borderRadius: wp(10),
            }}>
            <Text
              style={{
                fontSize: hp(1.8),
                marginRight: wp(2.3),
                fontFamily: 'Poppins-SemiBold',
                color: '#FFFFFF',
              }}>
              Chat
            </Text>
            <Image
              source={whatsapp}
              style={{height: hp(2.5), width: wp(5.2)}}
            />
          </LinearGradient>
        </TouchableOpacity>
      </LinearGradient>

      <Modal
        transparent={true}
        visible={isAmountModalVisible}
        animationType="slide"
        onRequestClose={() => setIsAmountModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Enter Donation Amount</Text>

            <View style={styles.quickAmountsContainer}>
              <TouchableOpacity
                onPress={() => setAmount('100')}
                style={[
                  styles.quickAmountButton,
                  amount === '100' && styles.quickAmountButtonActive,
                ]}>
                <Text style={styles.quickAmountText}>100 ₹</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setAmount('500')}
                style={[
                  styles.quickAmountButton,
                  amount === '500' && styles.quickAmountButtonActive,
                ]}>
                <Text style={styles.quickAmountText}>500 ₹</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setAmount('1000')}
                style={[
                  styles.quickAmountButton,
                  amount === '1000' && styles.quickAmountButtonActive,
                ]}>
                <Text style={styles.quickAmountText}>1000 ₹</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.orText}>OR</Text>

            <TextInput
              style={styles.amountInput}
              placeholder="Enter custom amount"
              keyboardType="numeric"
              value={customAmount}
              onChangeText={text => setCustomAmount(text)}
            />

            <View style={styles.modalButtonsContainer}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setIsAmountModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.donateButton}
                onPress={() => {
                  const donationAmount = customAmount || amount;
                  if (donationAmount) {
                    setIsAmountModalVisible(false);
                    openCheckout(donationAmount);
                  } else {
                    alert('Please enter an amount');
                  }
                }}>
                <Text style={styles.donateButtonText}>Proceed to Pay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal for payment processing*/}
      <Modal
        transparent={true}
        visible={paymentProcessingSuccess}
        animationType="slide"
        onRequestClose={() => setPaymentProcessingSuccess(false)}>
        <View style={styles.modalContainerSuccessPayment}>
          <TouchableOpacity
            onPress={() => setPaymentProcessingSuccess(false)}
            style={{
              alignSelf: 'flex-end',
              margin: wp(3),
              right: wp(0.3),
              position: 'absolute',
              zIndex: 1,
            }}>
            <Image
              source={cancel}
              style={{
                height: hp(3),
                width: wp(6),
                aspectRatio: 1 / 1,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <Image
            source={processingpayment}
            style={{
              height: hp(33),
              width: wp(45),
              resizeMode: 'contain',
              backgroundColor: '#FFFFFF',
            }}
          />

          <Text
            style={{
              fontSize: hp(2),
              fontFamily: 'Poppins-Medium',
              textAlign: 'center',
              marginHorizontal: wp(1),
              color: '#2D4B73',
            }}>
            Payment successful! {'\n'} Processing donation...
          </Text>
        </View>
      </Modal>

      {/* Modal for payment confirmation */}
      <Modal
        transparent={true}
        visible={paymentSuccess}
        animationType="slide"
        onRequestClose={() => setPaymentSuccess(false)}>
        <View style={styles.modalContainerSuccessPayment}>
          <TouchableOpacity
            onPress={() => setPaymentSuccess(false)}
            style={{
              alignSelf: 'flex-end',
              margin: wp(3),
              right: wp(0.3),
              position: 'absolute',
              zIndex: 1,
            }}>
            <Image
              source={cancel}
              style={{
                height: hp(3),
                width: wp(6),
                aspectRatio: 1 / 1,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <Image
            source={moneychecked}
            style={{
              marginTop: hp(3),
              height: hp(30),
              width: wp(40),
              resizeMode: 'contain',
              backgroundColor: '#FFFFFF',
            }}
          />

          <Text
            style={{
              fontSize: hp(2.1),
              fontFamily: 'Poppins-Medium',
              textAlign: 'center',
              marginHorizontal: wp(2),
              color: '#000000',
              letterSpacing: 0.3,
            }}>
            Donation processed successfully! {'\n'} Thank you.
          </Text>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  modalContainerSuccessPayment: {
    backgroundColor: '#FFFFFF',
    height: hp(45),
    width: wp(78),
    elevation: 5,
    alignItems: 'center',
    borderRadius: wp(3),
    alignSelf: 'center',
  },
  modalContainer: {
    height: hp(100),
    alignSelf: 'center',

    width: wp(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#F2F0EB',
    padding: 20,
    // height: hp(45),
    borderRadius: 10,
    width: wp(85),
  },
  modalTitle: {
    fontSize: hp(2.2),
    fontFamily: 'Poppins-Medium',
    textAlign: 'center',
    color: '#386641',
  },
  quickAmountsContainer: {
    marginTop: hp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginBottom: 15,
  },
  quickAmountButton: {
    borderWidth: wp(0.4),
    borderColor: '#D9C3A9',
    borderRadius: wp(2),
    height: hp(5.5),
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(20),
    backgroundColor: '#FFFFFF',
  },
  quickAmountButtonActive: {
    backgroundColor: '#F2DC6D',
    borderColor: '#A6896F',
    borderWidth: wp(0.5),
  },
  quickAmountText: {
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    fontFamily: 'Poppins-Regular',
  },
  amountInput: {
    borderWidth: 1,
    borderColor: '#A64138',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontFamily: 'Poppins-Regular',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  cancelButtonText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#333',
  },
  donateButton: {
    backgroundColor: '#F27141',
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  donateButtonText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#FFF',
  },
  MainContainer: {
    flex: 1,
  },
  imageBackground: {
    width: wp(100),
    position: 'relative',
  },
  imageContainer: {
    width: wp(100),
    position: 'absolute',
    top: 0,
    zIndex: 100,
  },
  imageBackground: {
    flex: 1,
    // height: hp(27),
    width: '100%',
    resizeMode: 'cover',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(2),
    // marginTop: hp(6),
    paddingHorizontal: hp(2.3),
  },
  leftButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
    aspectRatio: 1 / 1,
    borderRadius: wp(100),
    height: hp(5.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftButtonImage: {
    height: hp(4.5),
    width: wp(10),
  },
  rightButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#FFFFFF',
    aspectRatio: 1 / 1,
    borderRadius: wp(100),
    height: hp(5.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightButtonImage: {
    height: hp(3),
    width: wp(6),
  },
});

export default DonationDetail;
