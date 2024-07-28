import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Switch, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const ClockApp = () => {
    const [time, setTime] = useState('');
    const [alarms, setAlarms] = useState({
        '05:00 AM': false,
        '08:00 AM': false,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const toggleAlarm = (time) => {
        setAlarms({ ...alarms, [time]: !alarms[time] });
    };

    return (
        <ScrollView>


            <View style={styles.container}>
                <View style={styles.clockContainer}>
                    <View style={styles.clockFace}>
                        <Text style={styles.timeText}>{time}</Text>
                        <Text style={styles.locationText}>Istanbul - Turkey</Text>
                    </View>
                    <View style={styles.alarmContainer}>
                        {Object.keys(alarms).map((alarmTime) => (
                            <View key={alarmTime} style={styles.alarmItem}>
                                <Text style={styles.alarmText}>{alarmTime}</Text>
                                <Switch
                                    value={alarms[alarmTime]}
                                    onValueChange={() => toggleAlarm(alarmTime)}
                                />
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFB74D',
    },
    clockContainer: {
        width: width * 0.8,
        height: height * 0.6,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    clockFace: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
    },
    timeText: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    locationText: {
        fontSize: 18,
        color: '#757575',
    },
    alarmContainer: {
        width: '100%',
    },
    alarmItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
    },
    alarmText: {
        fontSize: 18,
    },
});

export default ClockApp;
