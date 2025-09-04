import {
    DirectionsBoat as Ship,
    Anchor,
    LocationOn as MapPin,
    Settings,
    TrendingUp,
    Info,
    Flag,
    Public,
    DirectionsBoatFilled,
    EventNote
} from '@mui/icons-material';
import {
    Card,
    CardContent,
    Typography,
    Box,
    Chip,
    Avatar,
    Grid,
    LinearProgress,
    IconButton,
    Divider
} from '@mui/material';

// Sample vessel profile data
const vesselProfile = {
    imo: "123456",
    vesselTypes: [
        { vesselType: "Roll On Roll Off" }
    ],
    portCallingTrends: [
        { portName: "Tangier", month: "2025-07-01", count: 153 },
        { portName: "Samsun Anchorage", month: "2025-07-01", count: 151 },
        { portName: "Tangier", month: "2025-07-01", count: 156 },
        { portName: "Tuapse", month: "2025-07-01", count: 154 }
    ],
    lastLocation: {
        longitude: "6.5305166666666",
        latitude: "55.6305166666666",
    },
    event: {
        event1: "Inspection Passed - August 2025",
        event2: "New Crew Onboarded - July 2025",
    },
    portRegistry: "New Registration",
    grossTonnage: "7362",
    totalEngines: "2",
    vesselName: "MV Ocean Explorer",
    flag: "Panama"
};

// Progress Bar Component
function ProgressBar({ value, maxValue, color = "#42a5f5", sx = {} }) {
    const percentage = (value / maxValue) * 100;
    return (
        <LinearProgress
            variant="determinate"
            value={percentage}
            sx={{
                height: 8,
                borderRadius: 4,
                bgcolor: 'rgba(66, 165, 245, 0.2)',
                '& .MuiLinearProgress-bar': {
                    bgcolor: color,
                    borderRadius: 4,
                },
                ...sx
            }}
        />
    );
}

function VesselCard({ profile }) {
    // Aggregate port calls by portName
    const portCounts = profile.portCallingTrends.reduce((acc, curr) => {
        acc[curr.portName] = (acc[curr.portName] || 0) + curr.count;
        return acc;
    }, {});

    const topPorts = Object.entries(portCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);

    const maxPortCount = Math.max(...Object.values(portCounts));

    const formatCoordinate = (coord, type) => {
        const num = parseFloat(coord);
        let direction;
        if (type === 'lat') {
            direction = num >= 0 ? 'N' : 'S';
        } else {
            direction = num >= 0 ? 'E' : 'W';
        }
        return `${Math.abs(num).toFixed(4)}°${direction}`;
    };

    const getProgressColor = (index) => {
        const colors = ['#42a5f5', '#1976d2', '#0d47a1']; // Light blue variations
        return colors[index] || colors[2];
    };



    return (
        <Card
            elevation={8}
            sx={{
                width: 550,
                background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)',
                borderRadius: 4,
                boxShadow: '0 8px 32px rgba(33, 150, 243, 0.2)',
                border: '1px solid rgba(66, 165, 245, 0.1)',
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.015)',
                    boxShadow: '0 20px 60px rgba(33, 150, 243, 0.3)',
                }
            }}
        >
            {/* Header Section */}
            <Box sx={{
                background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
                color: 'white',
                p: 1.5, // reduced padding
                borderRadius: '16px 16px 0 0'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar sx={{
                            bgcolor: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            width: 48, // smaller avatar
                            height: 48,
                            backdropFilter: 'blur(10px)'
                        }}>
                            <Ship fontSize="medium" /> {/* smaller icon */}
                        </Avatar>
                        <Box>
                            <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.3, color: 'white' }}>
                                {profile.vesselName || `IMO ${profile.imo}`}
                            </Typography>
                            <Typography variant="caption" sx={{ opacity: 0.9, color: 'white' }}>
                                IMO: {profile.imo}
                            </Typography>
                        </Box>
                    </Box>
                    <IconButton sx={{ color: 'white', bgcolor: 'rgba(255,255,255,0.1)' }} size="small">
                        <Info fontSize="small" />
                    </IconButton>
                </Box>

                {/* Vessel Type Chips */}
                <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                    {profile.vesselTypes.map(({ vesselType }, idx) => (
                        <Chip
                            key={idx}
                            label={vesselType}
                            size="small"
                            sx={{
                                bgcolor: 'rgba(255,255,255,0.25)',
                                color: 'white',
                                fontWeight: 600,
                                fontSize: '0.75rem', // smaller font
                                backdropFilter: 'blur(5px)'
                            }}
                        />
                    ))}
                </Box>
            </Box>

            <CardContent sx={{ p: 1, bgcolor: 'white' }}>
                {/* Key Statistics Grid */}
                <Grid container spacing={1} sx={{ mb: 2 }}> {/* reduced spacing */}
                    <Grid item xs={6}>
                        <Box sx={{
                            textAlign: 'center',
                            p: 1,
                            bgcolor: '#f8fbff',
                            borderRadius: 3,
                            border: '1px solid #e3f2fd',
                            transition: 'all 0.2s ease',
                            '&:hover': { bgcolor: '#e3f2fd' }
                        }}>
                            <Settings sx={{ color: '#1976d2', fontSize: 22, mb: 0.5 }} /> {/* smaller icon */}
                            <Typography variant="h5" sx={{ fontWeight: 700, color: '#1976d2', mb: 0.3 }}>
                                {profile.totalEngines}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#666', fontWeight: 500 }}>
                                Total Engines
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{
                            textAlign: 'center',
                            p: 1,
                            bgcolor: '#f8fbff',
                            borderRadius: 3,
                            border: '1px solid #e3f2fd',
                            transition: 'all 0.2s ease',
                            '&:hover': { bgcolor: '#e3f2fd' }
                        }}>
                            <Anchor sx={{ color: '#1976d2', fontSize: 24, mb: 0.5 }} />
                            <Typography variant="h5" sx={{ fontWeight: 700, color: '#1976d2', mb: 0.3 }}>
                                {parseInt(profile.grossTonnage, 10).toLocaleString()}
                            </Typography>
                            <Typography variant="caption" sx={{ color: '#666', fontWeight: 500 }}>
                                Gross Tonnage
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Location Information */}
                <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <MapPin sx={{ color: '#1976d2', fontSize: 18 }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1976d2' }}>
                            Last Known Position
                        </Typography>
                    </Box>
                    <Box sx={{
                        bgcolor: '#f8fbff',
                        p: 1.5,
                        borderRadius: 3,
                        border: '1px solid #e3f2fd'
                    }}>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Typography variant="caption" sx={{ color: '#666', mb: 0.3 }}>
                                    Latitude
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 600, color: '#1976d2' }}>
                                    {formatCoordinate(profile.lastLocation.latitude, 'lat')}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="caption" sx={{ color: '#666', mb: 0.3 }}>
                                    Longitude
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 600, color: '#1976d2' }}>
                                    {formatCoordinate(profile.lastLocation.longitude, 'lon')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                <Divider sx={{ my: 2, bgcolor: '#e3f2fd' }} />

                {/* Port Calling Analysis */}
                <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                        <TrendingUp sx={{ color: '#1976d2', fontSize: 22 }} />
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1976d2' }}>
                            Top Port Visits
                        </Typography>
                    </Box>
                    {topPorts.map(([portName, totalCalls], idx) => (
                        <Box key={idx} sx={{ mb: 2 }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mb: 0.7
                            }}>
                                <Typography variant="body2" sx={{ fontWeight: 500, color: '#333' }}>
                                    {portName}
                                </Typography>
                                <Chip
                                    label={`${totalCalls} visits`}
                                    size="small"
                                    sx={{
                                        bgcolor: getProgressColor(idx),
                                        color: 'white',
                                        fontWeight: 600,
                                        fontSize: '0.7rem'
                                    }}
                                />
                            </Box>
                            <ProgressBar
                                value={totalCalls}
                                maxValue={maxPortCount}
                                color={getProgressColor(idx)}
                                sx={{ height: 6 }} // thinner progress bar
                            />
                        </Box>
                    ))}
                </Box>

                {/* Event Section */}
                {profile.event && (
                    <Box sx={{ mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                            <EventNote sx={{ color: '#1976d2', fontSize: 20 }} />
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, color: '#1976d2' }}>
                                Recent Events
                            </Typography>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 0.7 // less gap between events
                        }}>
                            {Object.entries(profile.event).map(([key, value]) => (
                                <Box
                                    key={key}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        p: 1,
                                        pl: 1.5,
                                        bgcolor: '#f8fbff',
                                        borderRadius: 2,
                                        border: '1px solid #e3f2fd',
                                        transition: 'all 0.2s ease',
                                        fontSize: '0.875rem',
                                        '&:hover': {
                                            bgcolor: '#e3f2fd'
                                        }
                                    }}
                                >
                                    <EventNote sx={{ color: '#42a5f5', mr: 1 }} fontSize="small" />
                                    <Typography variant="body2" sx={{ fontWeight: 500, color: '#333' }}>
                                        {value}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}

                {/* Registry Information */}
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        p: 1.5,
                        bgcolor: '#f8fbff',
                        borderRadius: 3,
                        border: '1px solid #e3f2fd'
                    }}
                >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Anchor sx={{ color: '#1976d2', fontSize: 20 }} />
                        <Box>
                            <Typography variant="caption" sx={{ color: '#666', mb: 0.3 }}>
                                Port Registry
                            </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 600, color: '#1976d2' }}>
                                {profile.portRegistry || 'N/A'}
                            </Typography>
                        </Box>
                    </Box>
                    {profile.flag && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Flag sx={{ color: '#1976d2', fontSize: 20 }} />
                            <Box>
                                <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.3, display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <DirectionsBoatFilled fontSize="small" />
                                    {profile.vesselName || `IMO ${profile.imo}`}
                                </Typography>
                                <Typography variant="caption" sx={{ opacity: 0.9, display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                    <Public fontSize="small" />
                                    IMO: {profile.imo}
                                </Typography>
                            </Box>
                        </Box>
                    )}
                </Box>
            </CardContent>
        </Card>
    );
}


// Main App Component
export default function App() {
    return (
        <Box
            sx={{
                bgcolor: '#f0f4f8',
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '-30px',
            }}
        >
            <VesselCard profile={vesselProfile} />
        </Box>
    );
}