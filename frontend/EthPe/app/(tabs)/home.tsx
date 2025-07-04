import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Touchable, Image } from 'react-native';
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import illustration from '../assets/images/illustration.jpg'

const HomeScreen: React.FC = () => {
    const router = useRouter();
    return (
        <ScrollView style={styles.container}>
            {/* header container */}
            <View style={styles.headerContainer}>
                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <Ionicons name="search" size={20} color="#fff" style={styles.searchIcon} />
                    <TextInput placeholder="Search" placeholderTextColor="#ccc" style={styles.searchInput} />
                </View>
                <TouchableOpacity onPress={() => (router.push('/(tabs)/profile'))}>
                    <Ionicons name="person-circle" size={48} color="#fff" style={styles.profileIcon} />
                </TouchableOpacity>

            </View>


            <View style={styles.illustrationBox}>
                <Image
                    source={illustration}
                    style={styles.illustration}
                    resizeMode="cover" // or "contain" if you want full image in box
                />
            </View>

            {/* Buttons */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={styles.button}  onPress={() => router.push('/scanner')}>
                    <Ionicons name="qr-code" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Scan QR</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Ionicons name="swap-horizontal" size={20} color="#fff" />
                    <Text style={styles.buttonText}>Pay</Text>
                </TouchableOpacity>
            </View>

            {/* People */}
            <Text style={styles.peopleTitle}>People</Text>
            <View style={styles.peopleContainer}>
                <View style={styles.person}>
                    <View style={[styles.avatar, { backgroundColor: '#00FFFF' }]}>
                        <Text style={styles.avatarText}>M</Text>
                    </View>
                    <Text style={styles.personName}>Mukesh</Text>
                </View>

                <View style={styles.person}>
                    <View style={[styles.avatar, { backgroundColor: '#FF0000' }]}>
                        <Text style={styles.avatarText}>S</Text>
                    </View>
                    <Text style={styles.personName}>Shrinivas</Text>
                </View>

                <View style={styles.person}>
                    <View style={[styles.avatar, { backgroundColor: '#00FF00' }]}>
                        <Text style={styles.avatarText}>A</Text>
                    </View>
                    <Text style={styles.personName}>Akash</Text>
                </View>

                <View style={styles.person}>
                    <View style={[styles.avatar, { backgroundColor: '#00FFFF' }]}>
                        <Text style={styles.avatarText}>K</Text>
                    </View>
                    <Text style={styles.personName}>Kaustubh</Text>
                </View>
            </View>

            {/* More */}
            <TouchableOpacity style={styles.moreContainer}>
                <Ionicons name="chevron-down" size={24} color="#fff" />
                <Text style={styles.moreText}>More</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        backgroundColor: '#333',
        borderRadius: 20,
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 20,
        width: '90%',
    },
    headerContainer: {
        flexDirection: 'row',
    },
    searchIcon: {
        marginRight: 5,
    },
    searchInput: {
        flex: 1,
        color: '#fff',
        height: 40,
    },
    profileIcon: {
        marginLeft: 5,
        marginTop: -5,
    },
    illustrationBox: {
        width: '100%',
        height: 200, // or any fixed height you want
        backgroundColor: '#222',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
    },

    illustration: {
        width: '100%',
        height: '100%',
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#1E1EFF',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        marginLeft: 8,
    },
    peopleTitle: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 10,
    },
    peopleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    person: {
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarText: {
        color: '#000',
        fontWeight: 'bold',
    },
    personName: {
        color: '#fff',
        marginTop: 5,
        fontSize: 12,
    },
    moreContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    moreText: {
        color: '#fff',
        marginLeft: 5,
    },
});

export default HomeScreen;
