import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import Linear from '../component/Linear';
import BigButton from '../component/BigBUtton';

const BottomSheet = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openBottomSheet = () => {
    setModalVisible(true);
  };

  const closeBottomSheet = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
        <Linear/>
        <View style={{ paddingHorizontal: 23, }}>
              <Text style={{
                color: 'white',
                fontWeight: 600,
                fontSize: 15,
                marginTop: 15,
              }}>JIVDANI HOSPITAL</Text>
              <View style={{ flexDirection: 'row', gap: 55, }}>
                <Text style={{
                  color: 'black',
                  fontWeight: 600,
                  fontSize: 15,
                  marginTop: 15,
                }}>Suraaj Singh (31 Y, Male)
                </Text>
                <Text style={{
                  color: 'black',
                  fontWeight: 600,
                  fontSize: 15,
                  marginTop: 15,
                }}>375  9852385294</Text>
              </View>
              <BigButton title={"Vitals Options"} />
            </View>
      <TouchableOpacity onPress={openBottomSheet} style={styles.openButton}>
        <Text style={styles.buttonText}>Show Bottom Sheet</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeBottomSheet}
      >
        <View style={styles.modalOverlay} onPress={closeBottomSheet} />
        <View style={styles.bottomSheet}>
          <Text style={styles.sheetText}>This is a simple Bottom Sheet</Text>
          <TouchableOpacity onPress={closeBottomSheet} style={styles.closeButton}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  openButton: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
  },
  sheetText: {
    fontSize: 18,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 5,
  },
});

export default BottomSheet;
